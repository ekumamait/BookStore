import User from '../models/users';

const Users = {
    /**
   * Create A user
   * @param {object} req 
   * @param {object} res
   * @returns {object} User object 
   */

  async GetAll(req,res) {
      try {
        User.findAll();

        return res.json({
            "status": 200, 
            "message": "All Users", 
            "data": rows
          });
      } catch (err) {
        console.log(err);
        return res.status(404).send(err);
      }
  },

  async GetSingleUser(req,res) {
      try {
        const { rows } = await User.findByPk(req.params.id)
        console.log(rows);
      
        return res.json({
            "status": 200, 
            "message": "Single User",
            "data": rows
        })
      } catch (err) {
        console.log(err);
        return res.status(404).send('sorry cant find that')
      }
  },

  async UpdateUser (req,res) {
    const updateUser = req.body;
      try {
        const { user } = await User.update({
            name: updateUser.name,
            password: updateUser.password
        }, 
            {where: {id: req.params.id}
        })
        return res.json({
            "status": 200, 
            "message": 'User successfully updated', 
            "data": user
        })
      } catch (err) {
        console.log(err);
        return res.json({
            'status': 404, 
            'message': 'sorry cant find that'
        })
      }
  },

  async PostUser (req,res) {
    const newUser = req.body;  
      try {
        const { rows } = User.create({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        return res.json({
            "status": 201, 
            "message": "User created successfully", 
            "data": rows
        })
      } catch (err) {
        console.log(err);
        return res.status(404).send(err)
      }
  },

  async DeleteUser (req,res) {
      try {
        const { rows } = await User.destroy({
            where: {id: req.params.id} 
        });
        return res.json({
            "status": 200, 
            "message": 'user deleted successfully',
            "data": rows
        })
      } catch (err) {
        console.log(err);
        return res.status(404).send('sorry cant find that')
      }
  }
}


export default Users;