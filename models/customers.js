module.exports = function(sequelize,DataTypes){
	var Customers = sequelize.define("Customers",{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {

				len: [1,50]
			}
		},
		lastName: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {

				len: [1,50]

			}
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false,

			// validate:{
			// 	len: [50]
			// }

		},   
		phone:{
			type: DataTypes.STRING,

		},
		city: {
			type: DataTypes.STRING,
        
		},
		Address:{
			type: DataTypes.STRING,
		},
		stove: {
			type: DataTypes.STRING,
					
		},
		hobs: {
			type: DataTypes.STRING		
			
		},
		oven:{
			type: DataTypes.STRING,
		},
		
		foodRest:{
			type:DataTypes.STRING
		},
		fdRestType:{
			type:DataTypes.STRING
		},
		password:{
			type:DataTypes.STRING
		}
		
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