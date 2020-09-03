/**
    https://sequelize.org/master/manual/model-querying-basics.html
 */
const { sequelize } = require('./sequelize/sequelize-common');
const { Sequelize, DataTypes } = require('sequelize');

// models can be used with different connections so the connection-specific is passed in to initialize the model
const UserModel = require('./models/thuDemoUser')(sequelize, DataTypes);

(async () => {

    const result = await UserModel.create({
        username: 'user-from-model101',
        password: 'supersecret',
        date_created: new Date()
    });

    console.log({ result })

})().catch(error => {
    console.log({error});
});