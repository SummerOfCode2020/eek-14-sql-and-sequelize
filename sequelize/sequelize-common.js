// see
// <https://github.com/sequelize/sequelize/blob/master/src/sequelize.js>
const { Sequelize } = require('sequelize');

// we normally keep our settings files in .gitignore and do not commit to github where they credentials can be stolen
// this should be a file that is not stored in git
const { mysqlUrl } = require('./not-for-git-settings')

/**

    * For `logging` choose one of these logging options

    - Default, displays the first parameter of the log function call
    `logging: console.log`

    - Displays all log function call parameters               
    `logging: (...msg) => console.log(msg)`

    - Disables logging
    `logging: false`                     
    
    - Use custom logger (e.g. Winston or Bunyan), displays the first parameter
    `logging: msg => logger.debug(msg)`    
    
    - Alternative way to use custom logger, if you have one, displays all messages
    `logging: logger.debug.bind(logger)`

 */

 /**
 
    * For `dialectOptions`

    - see <https://sequelize.org/master/manual/dialect-specific-things.html>
 

    `multipleStatements` and other options can be found here:

    - <https://github.com/sidorares/node-mysql2/blob/master/lib/connection_config.js>
    - <https://github.com/mysqljs/mysql>

  */

const sequelize = new Sequelize(mysqlUrl, {
    logging: console.log,
    dialectOptions: {
        multipleStatements: true
    }
});

module.exports = {
    sequelize
}