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
			type: DataTypes.STRING,
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
		profilePic:{
			type: DataTypes.STRING,
		},
		bioData:{
			type: DataTypes.TEXT,

		}
		
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
	
	Chefs.associate = function(models) {
		// Associating Chefs with orders
		// When an Chef is deleted, also delete any associated Order
		Chefs.hasMany(models.Orders, {
		  onDelete: "cascade"
		});
	  };	
		


   
	return Chefs;
};
 
