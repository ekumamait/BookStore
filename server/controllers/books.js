import Book from '../models/books';
import User from '../models/users';
import Favorites from '../models/favorites';

const Books = {
  /**
   * Post A book
   * @param {object} req 
   * @param {object} res
   * @returns {object} User object 
   */

    async GetAllPosts(req,res) {
        Book.findAll({
            include: [{model: User, as: 'UserRef'}]
        })
        .then(book => {
            res.json({
                "status": 200, 
                "message": "All Books", 
                "data": book
            })
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err)
        })
    },

    async SinglePost(req,res) {
        Book.findByPk(req.params.id, {
            include: [{
                model: Favorites, as: 'All_Favorite',
                attributes: ['the_favorite']
            }, {model: User, as: 'UserRef' }]
        })
        .then(book => {
            res.json({
                "status": 200, 
                "message": "single Books", 
                "data": book
            })
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err)
        })
    },

    async Post (req,res) {
        const newBook = req.body;
        Book.create({
            title: newBook.title,
            author: newBook.author,
            year: newBook.year
        })
        .then(book => {
            res.json({
                "status": 201, 
                "message": "Post created successfully", 
                "data": book
            })
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err)
        })
    },

}

export default Books;
