const { sequelize } = require('./sequelize/sequelize-common');

(async () => {

    // DROP of a table removes it. DROP is how we delete an entire table and it's structure
    await sequelize.query(`
        DROP TABLE IF EXISTS thu_demo_user;
    `);

    await sequelize.query(`
        DROP TABLE IF EXISTS thu_demo_product;
    `);

    // for Tables, we use the SHOW keyword
    const [results, metadata] = await sequelize.query(`
        SHOW TABLES;
    `);

    // show the tables are returned
    console.log({results, metadata})

})().catch(error => {
    console.log({error});
});;