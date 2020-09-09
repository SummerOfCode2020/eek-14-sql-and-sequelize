const { sequelize } = require('./sequelize/sequelize-common');

/**
    Two key functions are store in a utils file to keep this file focused
 */
const { getRandomValue, getTestUserInsertStatements } = require('./utils');

/**

    Get a batch of random user data to insert.

    Insert that data.

    A batch is multiple SQL statements that are executed together. Not as delicious as a batch of cookies 🍪🍪🍪🍪🍪.

    <https://www.tutorialspoint.com/jdbc/jdbc-batch-processing.htm>

 */
(async () => {

    // get 5 insert statements for random example data
    const batchOfSQL = getTestUserInsertStatements(5);

    // apply all SQL statements to the database
    await sequelize.query(batchOfSQL);

    /**
        Get the data from the table to confirm the new entries all succeeded.

        This time we specify the columns we want to get data for.

        See <https://dev.mysql.com/doc/refman/5.6/en/select.html>
    */
    const [results] = await sequelize.query(`
        SELECT username, date_created
        FROM thu_demo_user_jar
    `);

    // show the SQL results in the console
    console.log({results});

})().catch(error => {
    console.log({error});
});;