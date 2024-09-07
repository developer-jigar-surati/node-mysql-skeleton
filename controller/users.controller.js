const db = require('../models');
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Users
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
    res.status(200).send({
        success: false,
        message: "Required filed missing!"
    });
    return;
  }
  
  const user = {
    email: req.body.email,
    password: req.body.password,
  }

  Users.create(user).then((res) => {
    res.status(200).send({
        success: true,
        message: "User Register Succesfully"
    });
  }).catch((err) => {
    res.status(500).send({
        success: false,
        message: err.message || "Some error occurred while creating the User."
    }); 
  });
};

// Retrieve all Userss from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    Users.findAll({ where: condition })
    .then((resData) => {
        res.status(200).send({
            success: true,
            message: resData,
        });
    })
    .catch(err => {
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Find a single Users with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Users.findByPk(id)
        .then((resData) => {
            if (resData) {
                res.status(200).send({
                    success: true,
                    message: resData,
                });
            } else {
            res.status(200).send({
                success: false,
                message: `Cannot find User with id=${id}.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

// Update a Users by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Users.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.status(200).send({
                success: true,
                message: "User was updated successfully."
            });
        } else {
            res.send({
                success: false,
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            success: false,
            message: "Error updating User with id=" + id
        });
    });
};
