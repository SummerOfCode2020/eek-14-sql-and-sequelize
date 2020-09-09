/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		date_created: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'user',
		timestamps: false
	});
};
