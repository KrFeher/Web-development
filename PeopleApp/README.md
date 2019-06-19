This project is a simple CRUD application for managing people.

What you need to run:
- Latest node.js (and npm)
- mysql server community edition (use 'password' as the root password or change password in code)

How to run:
- go to each folder (node_api and react_crud) and run 'npm install'
- start up the node app with 'node scr'
- start up your react app with 'npm start'
- if you're getting permission errors to sql, download mysql workbench and run the following command:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' 
- The application automatically creates the database and the tables if they don't yet exist


Features include: 
- Add new person
- Remove already existing person
- Modify person
- Show all person 
- Hide person
- Show hidden people
- Sort all person by email/name

The technologies that are used within the project: 
- HTML, CSS for simple elements and styling modification on page
- Semantic-ui for component library
- React (create-react-app) as a front end javascript library
- Redux for state management (+thunk)
- Node.js for backend
- Express for creating APIs 
- MySQL for database 

Potential improvements on GUI:
- Feedback for adding/modifying/removing person as a notification fly-in
- Feedback when error happened getting data from server
- Design and color changes

Potential improvements in code: 
- Error handling in actions.js and reducers.js
- Error handling from database
- Input validation for the APIs. 
- Custom error codes or messages from server
- Create stored procedures for common tasks in sql
- Separate API and database related code in node app
- Closing database connection when application closes


Krisztian Feher