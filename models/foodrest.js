
module.exports = function(sequelize,DataTypes){
	var foodRest = sequelize.define("foodRest",{
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
	/*	createdAt:{   
			type: DataTypes.DATE,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP")	
		}*/
	});
    
	return foodRest;
};