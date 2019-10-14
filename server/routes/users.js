
// import "@babel/polyfill";
// import _USERS from './users.json';

// app.get('/getAll', (req,res) => {
//     User.findAll()
//         .then(user => {
//             res.json({"status": 200, "message": "All Users", "data": user})
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(404).send(err)
//         })
// })

// app.get('/getOne/:id', (req,res) => {
//     User.findByPk(req.params.id)
//         .then(user => {
//             res.json({
//                 "status": 200, 
//                 "message": "Single User",
//                 "data": user
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(404).send('sorry cant find that')
//         })
// })

// app.put('/update/:id', (req,res) => {
//     const updateUser = req.body;
//     User.update({
//         name: updateUser.name,
//         password: updateUser.password
//     }, 
//         {where: {id: req.params.id}
//     })
//         .then(user => {
//             res.json({
//                 "status": 200, 
//                 "message": 'User successfully updated', 
//                 "data": user
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             res.json({
//                 'status': 404, 
//                 'message': 'sorry cant find that'
//             })
//         })
// })

// app.post('/post', (req,res) => {
//     const newUser = req.body;
//     User.create({
//         name: newUser.name,
//         email: newUser.email,
//         password: newUser.password
//     })
//     .then(user => {
//         res.json({
//             "status": 201, 
//             "message": "User created successfully", 
//             "data": user
//         })
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(404).send(err)
//     })
// })

// app.delete('/deleteOne/:id', (req,res) => {
//     User.destroy({
//         where: {id: req.params.id} 
//     })
//         .then(() => {
//             res.json({
//                 "status": 200, 
//                 "message": 'user deleted successfully'
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(404).send('sorry cant find that')
//         })
// })