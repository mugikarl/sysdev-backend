const exp = require('express');
const mysql = require('mysql');

const connectdb = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"sysdev_recruitment" 
});

//Stage 2
//Used create database sysdev_recruitment; to create the database
//Used create table programming_languages(id int not null auto_increment primary key, favorites varchar(255)); to create the table
//Used insert into programming_languages(favorites) values('Javascript'); to insert values

const web = exp();
web.get('/',(req,res) =>{
    res.send('Javascript')
});

web.get('/programming_languages',(req,res) =>{
    connectdb.query('select * from programming_languages;',(error,results) =>{
    if (error) throw err
    res.json(results);
    });
});


web.listen(3000);

//Stage 1
//Used node index.js to run the application