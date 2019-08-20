module.exports = function(sequelize,DataTypes){
	var Orders = sequelize.define("Orders",{
		userid: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		chefid: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		calendarid:{
			type: DataTypes.STRING
		},   
		userpreid: {
			type: DataTypes.STRING,
        
		},
		/*	createdAt:{   
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
		},
		updatedAt:{
			type: DataTypes.DATE,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP")	
		}
      */  
  
	});
   
	return Orders;
};