/***

    Write models by hand.

    Or use this script to generate the models automatically.


    About Sequelize Models

    <https://sequelize.org/master/manual/model-basics.html#model-definition>

 */
const { autoGenerate } = require('./sequelize/sequelize-automation');

autoGenerate.run(function (err) {
    if (err) throw err;

    console.log(autoGenerate.tables); // table list
    console.log(autoGenerate.foreignKeys); // foreign key list
});
