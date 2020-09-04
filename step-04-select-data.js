const { sequelize } = require('./sequelize/sequelize-common');
/**
    About as simple as SQL gets
 */
(async () => {

    const [results] = await sequelize.query(`
        SELECT *
        FROM thu_demo_user_njl
        LIMIT 1
    `);

    console.log({ results });

})().catch(error => {
    console.log({ error });
});;