var SequelizeAuto = require('sequelize-auto')

// we normally keep our settings files in .gitignore and do not commit to github where they credentials can be stolen
// this should be a file that is not stored in git
const { host, port, username, password } = require('./not-for-git-settings')

var autoGenerate = new SequelizeAuto(host, username, password, {
    host: 'us-cdbr-east-02.cleardb.com',
    dialect: 'mysql',
    directory: './models',
    port: port,
    caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    additional: {
        timestamps: false
    },
   // tables: ['table1', 'table2', 'myschema.table3'] 
})

module.exports = {
    autoGenerate
}