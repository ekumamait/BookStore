import connection from './index';
import { Sequelize } from "sequelize";
import User from '../models/users';

const Post = connection.define('Post', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
});

Post.belongsTo(User, {as: 'UserRef', foreignKey: 'userId'}); // adds foreignKey UserId in Post Table 
// Post.hasMany(Comment, {as: 'All_Comments'}); // foreignKey = PostId in the Comments Table


export default Post;