const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

require('dotenv').config();


const app = express()
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: `${process.env.SQL_AUTHORIZATION}`,
    database: "project_dashboard"

});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connection as id " + connection.threadId);
});

const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/api/attendees", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let attending = req.body.attending;
    
    console.log("Inserting new guest into guest list...");

    connection.query("INSERT INTO people SET ?",{
        name: name,
        email: email,
        attending: attending
    }, function(err, res){
        if (err) throw err;
        console.log(`${name}` + " has been inserted into the people table!")
    })
})


app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to my API</h1>
    <p>/api/test</p>
    <p>/api/attendees</p>
    `);
})


app.get("/api/test", cors(), (req, res) => {
    res.json({
        "teacher": "Drew"
    })
})

app.get("/api/attendees", cors(), (req, res) => {
    connection.query('SELECT * FROM people', (err,rows,fields)=>{
        if(!err)
        res.json({
            data: rows
        });
        else
        console.log(err)
    })
})



app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`);
})