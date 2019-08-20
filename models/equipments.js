module.exports = function(sequelize,DataTypes){
	var Equipments = sequelize.define("Equipments",{
		equName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		equType: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		equOptions:{
			type: DataTypes.STRING
		},   
		notes: {
			type: DataTypes.STRING,
        
		},
        
  
	});
   
	return Equipments;
};