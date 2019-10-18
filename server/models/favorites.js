import { Sequelize } from "sequelize";
import connection from './index';

// model definition for Favorites
const Favorites = connection.define('Favorite', {
    the_favorite: Sequelize.STRING,
});

export default Favorites;