function getRandomValue(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
/**
    rowCount can be provided to tell how many test records to create
*/
function getTestUserInsertStatements(rowCount) {
    const sqlStatements = [];
    for (let index = 0; index < rowCount; index++) {
        const randomUsername = `${getRandomValue(5)}${index}`
        // build the sql statement as an item in our array
        sqlStatements.push(` 
            INSERT INTO thu_demo_user_njl
            (
                username,
                password
            )
            VALUES
            (
                '${randomUsername}',
                'test1001'
            )
        `);
    }
    console.log({ sqlStatements });
    // flatten out the statements into on text with the SQL delimited between each statement
    return sqlStatements.join(";");
}
module.exports = {
    getRandomValue,
    getTestUserInsertStatements
}