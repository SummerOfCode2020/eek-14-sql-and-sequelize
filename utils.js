module.exports = {
    getRandomValue: (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    },

    getTestUserInsertStatements: (rowCount) => {
        const sqlStatements = [];
        for (let index = 0; index < rowCount; index++ ) {
            const randomUsername = `${getRandomValue(5)}${index}`
            
            // build the sql statement as an item in our array
            sqlStatements.push(` 
                INSERT INTO thu_demo_user
                (
                    username,
                    password,
                    date_created
                )
                VALUES
                (
                    '${randomUsername}',
                    'test1001',
                    now()
                );
            `);
        }

        // flatten out the statements into on text with the SQL delimited between each statement
        return sqlStatements.join(";");
    }

}