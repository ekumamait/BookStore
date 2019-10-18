import express from 'express';
import Users from '../controllers/users';
import Posts from '../controllers/books';

// defining middleware routes
const router = express.Router();

// Users routes
router.get('/getAll', Users.GetAll);
router.get('/getOne/:id', Users.GetSingleUser);
router.delete('/deleteOne/:id', Users.DeleteUser);
router.put('/update/:id', Users.UpdateUser);
router.post('/user', Users.PostUser);

// Post routes
router.get('/SinglePost/:ID', Posts.SinglePost);
router.get('/AllPosts', Posts.GetAllPosts);
router.post('/post', Posts.Post);

export default router;