module.exports = function(sequelize,DataTypes){
	var Packages = sequelize.define("Packages",{
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
       
  
	});
   
	return Packages;
};