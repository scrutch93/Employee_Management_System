const mysql = require ('mySQL');
const inquirer = require ('inquirer');
const fs = require('fs');
const { identity } = require('rxjs');

//create connection
const connection = mysql.createConnection({
//this connects to the local host
  host: 'localhost',
  port: 3306,
  user     : 'root',
  password : 'password',
  database : 'employeetrackerDB'
});

/*// Connect to MySQL
    db.connect(err => {
    if(err) {
        throw err
    }
    console.log ('MySQL Connected')

}*/





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

    const displayEmployees = () => {
        connection.query(
            "SELECT * FROM employee",
           
            (err,data) => {
                if (err) throw err
                console.table(data)
            }    
            );
    }
