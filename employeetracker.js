const mysql = require ('mySQL');
const inquirer = require ('inquirer');
const fs = require('fs');


const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user     : 'root',
  password : 'password',
  database : 'employeetrackerDB'
});

const start = () => {
    inquirer
    .prompt({
        name: "access",
        type: 'list',
        message: "Would you like to access your employee database?",
        choices: [ 'yes','no'],

    })
    .then((choice) => {
        console.log(choice)
        if (choice.access === "yes") {
            displayEmployees();

        }



    })}

    start ()
