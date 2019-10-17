import Post from '../models/posts';
import User from '../models/users';

const Posts = {
  /**
   * Post A book
   * @param {object} req 
   * @param {object} res
   * @returns {object} User object 
   */

    async GetAllPosts(req,res) {
        try {
            const { post } = await Post.findAll({
                include: [{model: User, as: 'UserRef'}]
            })
            return res.json({
                "status": 200, 
                "message": "All post", 
                "data": post
            })
        } catch(err) {
            console.log(err);
            return res.status(404).send(err)
        }
    },

    async SinglePost(req,res) {
        try {
            await Post.findByPk(req.params.id, {
                include: [{
                    model: Comment, as: 'All_Comments',
                    attributes: ['the_comment']
                }, {model: User, as: 'UserRef' }]
            })
            return res.json({"status": 200, "message": "All post", "data": post})
        } catch(err){
            console.log(err);
            return res.status(404).send(err)
        } 
    },

    async Post (req,res) {
        const newPost = req.body;
        try {
            Post.create({
                title: newPost.title,
                content: newPost.content,
            })
            res.json({
                "status": 201, 
                "message": "Post created successfully",
                // "data": data
            })
        } catch(err){
            console.log(err);
            res.status(404).send(err)
        }
    },

}

export default Posts;
