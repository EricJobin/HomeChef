module.exports = function(sequelize,DataTypes){
	var Chefs = sequelize.define("Chefs",{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		lastName: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
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
		}   
  
	});
   
	return Chefs;
};
  