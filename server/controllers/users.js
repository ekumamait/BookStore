import User from '../models/users';

const Users = {
    /**
   * Create A user
   * @param {object} req 
   * @param {object} res
   * @returns {object} User object 
   */

  async GetAll(req,res) {
    User.findAll()
    .then(user => {
        res.json({
            "status": 200, 
            "message": "All Users", 
            "data": user
        })
    })
    .catch(err => {
        console.log(err);
        res.status(404).send(err)
    })
  },

  async GetSingleUser(req,res) {
    User.findByPk(req.params.id)
        .then(user => {
            res.json({
                "status": 200, 
                "message": "Single User",
                "data": user
            })
        })
        .catch(err => {
            console.log(err);
            res.status(404).send('sorry cant find that')
        })
  },

  async UpdateUser (req,res) {
    const updateUser = req.body;
    User.update({
        name: updateUser.name,
        password: updateUser.password
    }, 
        {where: {id: req.params.id}
    })
        .then(user => {
            res.json({
                "status": 200, 
                "message": 'User successfully updated', 
                "data": user
            })
        })
        .catch(err => {
            console.log(err);
            res.json({
                'status': 404, 
                'message': 'sorry cant find that'
            })
        })
  },

  async PostUser (req,res) {
    const newUser = req.body;
    User.create({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    })
    .then(user => {
        res.json({
            "status": 201, 
            "message": "User created successfully", 
            "data": user
        })
    })
    .catch(err => {
        console.log(err);
        res.status(404).send(err)
    })
  },

  async DeleteUser (req,res) {
    User.destroy({
        where: {id: req.params.id} 
    })
        .then(() => {
            res.json({
                "status": 200, 
                "message": 'user deleted successfully'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(404).send('sorry cant find that')
        })
  }
}


export default Users;