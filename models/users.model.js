module.exports = (sequelizeObj, Sequelize) => {
    const Users = sequelizeObj.define("users", {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
    });
    return Users;
};