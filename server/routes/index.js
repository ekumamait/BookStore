import express from 'express';
import Users from '../controllers/users';
import Posts from '../controllers/posts';
import User from '../models/users';

// defining middleware routes
const router = express.Router();

// Users routes
// router.get('/getAll', Users.GetAll);
router.get('/getOne/:id', Users.GetSingleUser);
router.delete('/deleteOne/:id', Users.DeleteUser);
router.put('/update/:id', Users.UpdateUser);
router.post('/user', Users.PostUser);

router.get('/getAll', (req,res) => {
    User.findAll()
        .then(user => {
            res.json({"status": 200, "message": "All Users", "data": user})
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err)
        })
})
// Post routes
router.get('/SinglePost/:ID', Posts.SinglePost);
router.get('/AllPosts', Posts.GetAllPosts);
router.post('/post', Posts.Post);

export default router;