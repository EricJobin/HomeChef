module.exports = function(sequelize,DataTypes){
	var Calendars = sequelize.define("Calendars",{
		startdate: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		enddate: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		timing:{
			type: DataTypes.STRING
		},   
		orderid: {
			type: DataTypes.STRING,
        
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
   
	return Calendars;
};