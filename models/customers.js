module.exports = function(sequelize,DataTypes){
	var Customers = sequelize.define("Customers",{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		lastName: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{

			}
		},   
		phone:{
			type: DataTypes.INTEGER,

		},
		location: {
			type: DataTypes.STRING,
        
		},
      
	});
   
	return Customers;
};