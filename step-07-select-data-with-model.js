/**
    https://sequelize.org/master/manual/model-querying-basics.html
 */
 const { sequelize } = require('./sequelize/sequelize-common');
 const { Sequelize, DataTypes } = require('sequelize');
 const UserModel = require('./models/thuDemoUser')(sequelize, DataTypes);

//console.log({UserModel})

(async () => {

    // https://sequelize.org/v5/manual/querying.html
    const { count, rows } = await UserModel.findAndCountAll();

    console.log({ count })
    console.log({ rows })

    for(let rowNum = 0; rowNum < rows.length; rowNum++) {
        let row = rows[rowNum];
        let columnData = row.dataValues;
        console.log({ columnData })
        
        let { username, password } = columnData;
        console.log({ username, password });
    }

})().catch(error => {
    console.log({error});
});