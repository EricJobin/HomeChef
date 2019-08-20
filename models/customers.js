module.exports = function(sequelize,DataTypes){
	var Customers = sequelize.define("Customers",{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [50]
			}
		},
		lastName: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [50]
			}
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [50]
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