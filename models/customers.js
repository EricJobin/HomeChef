module.exports = function(sequelize,DataTypes){
	var Customers = sequelize.define("Customers",{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [35]
			}
		},
		lastName: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [35]
			}
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{

			}
		},   
		phone:{
			type: DataTypes.DECIMAL,

		},
		location: {
			type: DataTypes.STRING,
        
		},
		/*	createdAt:{   
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
   
	return Customers;
};