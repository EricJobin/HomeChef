module.exports = function(sequelize,DataTypes){
	var Orders = sequelize.define("Orders",{
		startdate: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		enddate: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		timing:{
			type: DataTypes.STRING
		}, 
		meal:{
			type:DataTypes.STRING	
		},
		noofPeople:{
			type:DataTypes.INTEGER
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
	  };
	  
	
   
	return Orders;
};