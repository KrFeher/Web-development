const express = require('express');
const app = express();
const db = require('./db');
const config = require('config');
const port = config.get('express_port');


app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body);
  next();
});



app.get('/retro/improvements/', (req, res, next) => {
  res.send(exampleImprovements)
  next();
});

app.post('/retro/improvements/', (req, res, next) => {
  const { text, improvement } = req.body;
  const id = exampleImprovements.length + 1;
  const newImprovement = { id, text, improvement }
  exampleImprovements.push(newImprovement);

  res.send(newImprovement);
  next();
})

app.delete('/retro/improvements/:id', (req, res) => {
  const id = req.params.id;
  const index = exampleImprovements.findIndex(x => x.id === id);
  const elementToDelete = exampleImprovements[index];
  if (elementToDelete) {
    exampleImprovements.splice(index, 1);
    res.send(elementToDelete);
  } else {
    res.status(404).send('Cannot find improvement to delete.');
  }
})


app.use((req, res, next) => {
  console.log(res);
  next();
});

app.listen(port, () => console.log(`Listening to port ${port}...`));

console.log(`The application is in ${config.get('name')} environment mode.`);

// think about websockets.
// fix async problem with getOpinions