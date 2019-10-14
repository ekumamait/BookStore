import _USERS from './../../users.json';
import sequelize from "sequelize";
import User from './users';

const connection = new sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'db.sqlite',
    operatorsAliases: false
});

connection
    .sync({
        force: true,
        logging: console.log()
    })
    .then(() => {
        User.bulkCreate(_USERS)
            .then(user => {
                console.log('sucessfully added users');
            })
            .catch(err => {
                console.log(err);
            })
    })
    .then(() => {
        console.log('connection to database established succesfully')
    })
    .catch(err => {
        console.log('Unable to connect to the database', err);
    })

export default connection;