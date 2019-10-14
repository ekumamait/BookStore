import { Sequelize } from "sequelize";
import connection from '.index';

const Comment = connection.define('Comment', {
    the_comment: Sequelize.STRING,
});

export default Comment;