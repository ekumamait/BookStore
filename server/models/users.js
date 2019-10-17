import { Sequelize, UUIDV4 } from "sequelize";
import connection from './index';
import _USERS from './../../users.json';

const User = connection.define('User', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            isAlphanumeric: true
        }
    }
});


export default User;