module.exports = function(sequelize,DataTypes){
	var Chefs = sequelize.define("Chefs",{
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
			type: DataTypes.STRING
		},   
		location: {
			type: DataTypes.STRING,
        
		},
		rates:{
			type: DataTypes.INTEGER
		},
		/*
		createdAt:{   
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
   
	return Chefs;
};
  