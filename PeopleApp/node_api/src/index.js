const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

let con;

function runDbQuery(query, successMessage = null) {
  con.query(query, (err, result) => {
    if (err) throw err;
    if (successMessage) console.log(successMessage);
  });
}

function initdb() {
  con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    multipleStatements: true,
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database!");
  });

  const dbCreateQuery = `SELECT SCHEMA_NAME
                          FROM INFORMATION_SCHEMA.SCHEMATA
                          WHERE SCHEMA_NAME = 'PeopleDB';
                          CREATE DATABASE IF NOT EXISTS PeopleDB;`

  runDbQuery(dbCreateQuery, "Database created");

  const tableCreateQuery = `USE PeopleDB;
                            CREATE TABLE IF NOT EXISTS Person (
                            id int NOT NULL AUTO_INCREMENT,
                            fullname varchar(255) NOT NULL,
                            age int NOT NULL,
                            balance int NOT NULL,
                            email varchar(255) NOT NULL,
                            address varchar(255) NOT NULL,
                            PRIMARY KEY (id)
                            );
                            CREATE TABLE IF NOT EXISTS HiddenIds (
                              id int NOT NULL,
                              PRIMARY KEY (id)
                              );`

  runDbQuery(tableCreateQuery, "Tables created...");
 
  const exampleDataQuery = `USE PeopleDB;
                            DELETE FROM Person;
                            INSERT INTO Person
                            (fullname, age, balance, email, address)
                            VALUES 
                            ("John Doe", 32, 500, "john.doe@flexera.com", "12 Sunshine drive, Belfast"),
                            ("Mary Small", 25, 20, "small.mary@flexera.com", "4 Brown st., Belfast"),
                            ("Robert Dobbins", 55, 420, "robert.dobbins@flexera.com", "45 Wilson st, London");`

  runDbQuery(exampleDataQuery, "Data loaded...");
}

initdb();

app.get('/app/people/', (req, res) => {
  let query = `SELECT * FROM PeopleDB.Person`

  if (req.query.sortby === 'email') {
    const sortCommand = ` ORDER BY email;`;
    query = query + sortCommand;
  } else if (req.query.sortby === 'fullname') {
    const sortCommand = ` ORDER BY fullname;`;
    query = query + sortCommand;
  } else {
    query = query + ';';
  }

  con.query(query, (err, result) => {
    if (err) {
      res.status(404).send(err);
      return;
    }
    res.send(result);
  });
})

app.post('/app/people/', (req, res) => {
  const {
    fullname,
    age,
    balance,
    email,
    address
  } = req.body;

  const query = `INSERT INTO Person
                 (fullname, age, balance, email, address)
                 VALUES 
                 ("${fullname}", ${parseInt(age)}, ${parseInt(balance)}, "${email}", "${address}");
                 SELECT LAST_INSERT_ID() as ID;`

  const newPerson = {
    fullname,
    age: parseInt(age),
    balance: parseInt(balance),
    email,
    address,
  };

  con.query(query, (err, result) => {
    if (err) {
      res.status(404).send(err);
      console.log(err);
      return;
    }
    newPerson.id = result[1][0].ID;
    res.send(newPerson);
  });
})

app.get('/app/people/hidden', (req, res) => {
  const query = `SELECT * FROM PeopleDB.HiddenIds;`;
  con.query(query, (err, result) => {
    if (err) {
      res.status(404).send(err);
      console.log(err);
      return;
    }
    let hiddenList = [];
    result.forEach(element => {
      hiddenList.push(element.id);
    });
    res.send(hiddenList);
  })
})

app.put('/app/people/toggleHide/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectQuery = `SELECT * FROM PeopleDB.HiddenIds;`;
  const deleteQuery = `DELETE FROM PeopleDB.HiddenIds WHERE id=${id};`;
  const addQuery = `INSERT INTO PeopleDB.HiddenIds VALUES (${id});`;

  con.query(selectQuery, (err, result) => {
    if (err) {
      res.status(404).send(err);
      console.log(err);
      return;
    }
    let hiddenList = [];
    result.forEach(element => {
      hiddenList.push(element.id);
    });

    if (hiddenList.includes(id)) {
      con.query(deleteQuery, (err, result) => {
        if (err) {
          res.status(404).send(err);
          console.log(err);
          return;
        }
      })
      const index = hiddenList.indexOf(id);
      hiddenList.splice(index,1);
      res.send(hiddenList);
    } else {
      con.query(addQuery, (err, result) => {
        if (err) {
          res.status(404).send(err);
          console.log(err);
          return;
        }
      })
      hiddenList.push(id);
      res.send(hiddenList);
    }
  });
})

app.put('/app/people/:id', (req, res) => {
  const {
    fullname,
    age,
    balance,
    email,
    address
  } = req.body;

  const id = req.params.id;

  const query = `UPDATE PeopleDB.Person
                 SET fullname = "${fullname}", age = "${parseInt(age)}", balance = "${parseInt(balance)}", email = "${email}", address = "${address}"
                 WHERE id = ${id};`

  con.query(query, (err, result) => {
    if (err) {
      res.status(404).send(err);
      console.log(err);
      return;
    }

    let person = {};
    person.id = req.params.id;
    person.fullname = fullname;
    person.age = parseInt(age);
    person.balance = parseInt(balance);
    person.email = email;
    person.address = address;

    res.send(person);
  });

})

app.delete('/app/people/:id', (req, res) => {
  const query = `DELETE from PeopleDB.Person 
                 WHERE id = ${req.params.id};`

  con.query(query, (err, result) => {
    if (err) {
      res.status(404).send(err);
      console.log(err);
      return;
    }

    // in case removing one that's hidden, then remove it from that list too
    const deleteQuery = `DELETE FROM PeopleDB.HiddenIds WHERE id=${req.params.id};`;
    con.query(query, (err, result) => {
      if (err) {
        res.status(404).send(err);
        console.log(err);
        return;
      }
    })
    res.send(req.params.id);
  });
});

app.listen(3001, () => console.log('Listening to port 3001...'));