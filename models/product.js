/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('product', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		categegory_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'shoes
pants
hats
gloves
'
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		last_updated: {
			type: DataTypes.DATE,
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'product',
		timestamps: false
	});
};
