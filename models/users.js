
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
module.exports = function(sequelize,DataTypes){
	var Users = sequelize.define("Users",{
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			
		},
		/*createdAt:{   
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
		},
		updatedAt:{
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP")	
		}
		*/	
	});
	User.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	  };
	  // Hooks are automatic methods that run during various phases of the User Model lifecycle
	  // In this case, before a User is created, we will automatically hash their password
	  User.addHook("beforeCreate", function(user) {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
	  });
	return Users;
};

