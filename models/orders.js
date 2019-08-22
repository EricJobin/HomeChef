module.exports = function(sequelize,DataTypes){
	var Orders = sequelize.define("Orders",{
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		timing:{
			type: DataTypes.STRING
		}, 
		meal:{
			type:DataTypes.STRING	
		},
		noofPeople:{
			type:DataTypes.STRING
		},
		status:{
			type : DataTypes.STRING,
		}
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
	Orders.associate = function(models) {
		// We're saying that a Post should belong to an Author
		// A Post can't be created without an Author due to the foreign key constraint
		Orders.belongsTo(models.Customers, {
		  foreignKey: {
				allowNull: false
		  }
		});
		Orders.belongsTo(models.Chefs,{
			foreignKey: {
				allowNull: false
		  }	
		});
	  };
	  
	
   
	return Orders;
};