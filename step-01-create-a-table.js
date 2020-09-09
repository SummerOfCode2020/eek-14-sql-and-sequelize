const { sequelize } = require('./sequelize/sequelize-common');

/**

    A note on decimals to follow up on a missed discussion from last night.

    A common column type for decimals like money will saves values such as 99,999,999,999.99

    `DECIMAL(13,2)`  
    
 */

/**
    See async-await.md
 */
(async () => {

    /**
    There are often use cases in which it easiest 
    to execute raw / already prepared SQL queries, we can 
    use the `sequelize.query` method for this

    See <https://sequelize.org/master/manual/raw-queries.html>

     */

    // <https://dev.mysql.com/doc/refman/8.0/en/create-table.html>
    await sequelize.query(`
        CREATE TABLE
        -- 'IF NOT EXISTS' is new tonight. 
        -- Prevents an error from occurring if the table exists.
        -- See dev.mysql.com link above for detail
        IF NOT EXISTS thu_demo_user_jar (
            id INT NOT NULL AUTO_INCREMENT,
            username VARCHAR(45) NOT NULL UNIQUE,
            password VARCHAR(45) NOT NULL,
            date_created DATETIME NULL,
            PRIMARY KEY (id)
        )
    `);

    /*
        to provide feedback on the sql above we get all tables

        See <https://dev.mysql.com/doc/refman/8.0/en/show.html>
        and <https://dev.mysql.com/doc/refman/8.0/en/show-tables.html>
    */
    const [results, metadata] = await sequelize.query(`
        SHOW TABLES
    `);

    console.log({results, metadata});

})().catch(error => {
    console.log({error});
});