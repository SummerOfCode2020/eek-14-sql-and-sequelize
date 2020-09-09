const { sequelize } = require('./sequelize/sequelize-common');

(async () => {

    /**
        To add a record to a table, we INSERT the record

        See <https://dev.mysql.com/doc/refman/5.6/en/insert.html>
     */
    await sequelize.query(`  
        INSERT INTO thu_demo_user_jar
        (
            username,
            password,
            date_created
        )
        VALUES
        (
            'testuser234324',
            'test1001',
            now()
        );
    `);

    /**
        Get the data from the table to confirm the new entry succeeded.

        `SELECT *` tells the database to return values for all columns in the table.

        See <https://dev.mysql.com/doc/refman/5.6/en/select.html>
    */
    const [results] = await sequelize.query(`
        SELECT *
        FROM thu_demo_user_jar
    `);

    console.log({results});

})().catch(error => {
    console.log({error});
});;