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
		city: {
			type: DataTypes.STRING,
        
		},
		Address:{
			type: DataTypes.STRING,
		},
		stove: {
			type: DataTypes.BOOLEAN,
					
		},
		hobs: {
			type: DataTypes.INTEGER		
			
		},
		oven:{
			type: DataTypes.BOOLEAN,
		},
		
		foodRest:{
			type:DataTypes.BOOLEAN
		},
		fdRestType:{
			type:DataTypes.STRING
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
	Customers.associate = function(models) {
		// Associating Chefs with orders
		// When an Chef is deleted, also delete any associated Order
		Customers.hasMany(models.Orders, {
		  onDelete: "cascade"
		});
	  };
   
	return Customers;
};