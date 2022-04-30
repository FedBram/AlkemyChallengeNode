const charactersModel =  (sequelize, type) => {
    return sequelize.define('character', {
        id: {
            type: type.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        },
        name: {
            type: type.STRING,
            unique: true
        },
        age: type.INTEGER,
        weigth: type.INTEGER,
        story: type.TEXT,
        img: type.STRING,
        // movies: type.STRING
    });
}

export default charactersModel