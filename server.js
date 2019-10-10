import "@babel/polyfill";
import express from "express";
import sequelize from "sequelize";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


// creating app instance
const app = express();
const connection = new sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'db.sqlite',
    operatorsAliases: false
});


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

connection
    .authenticate()
    .then(() => {
        console.log('connection to database established succesfully')
    })
    .catch(err => {
        console.log('Unable to connect to the database', err);
    })

// current process environment
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

export default app;