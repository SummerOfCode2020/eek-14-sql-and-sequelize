const { sequelize } = require('./sequelize/sequelize-common');
/**
    About as simple as SQL gets
 */
(async () => {

    const [results] = await sequelize.query(`
        SHOW VARIABLES LIKE "%version%";
    `);

    console.log({results});

})().catch(error => {
    console.log({error});
});;