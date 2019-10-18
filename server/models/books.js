import connection from './index';
import { Sequelize } from "sequelize";
import User from './users';
import Favorites from './favorites';

// model defination for Books 
const Book = connection.define('Book', {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    year: Sequelize.DATE
});

Book.belongsTo(User, {as: 'UserRef', foreignKey: 'id'}); // adds foreignKey UserId in Book Table 
Book.hasMany(Favorites, {as: 'All_Favorites'}); // foreignKey = FvaoriteId in the Favorite Table


export default Book;