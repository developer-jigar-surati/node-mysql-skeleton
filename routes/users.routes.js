module.exports = app => {
    const users = require("../controller/users.controller");
  
    var router = require("express").Router();
  
    // Create a new users
    router.post("/", users.create);
  
    // Retrieve all users
    router.get("/", users.findAll);
  
    // Retrieve a single users with id
    router.get("/:id", users.findOne);
  
    // Update a users with id
    router.put("/:id", users.update);
  
    app.use('/api/users', router);
};


//Import Controllers
// const userController = require('../controllers/userController');

// module.exports = (app) => {
// 	app.post('/do-register', userController.doRegister);
	
// 	app.post('/verify-email', userController.verifyEmail);
	
// 	app.post('/forgotpassword', userController.forgotPassword);
	
// 	app.post('/resetpassword', userController.resetPassword);
	
// 	app.post('/do-login', userController.doLogin);
	
// 	app.post('/get-user', userController.getUserData);
// };