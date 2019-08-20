
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
		}
	});
    
	return foodRest;
};