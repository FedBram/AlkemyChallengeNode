export default (sequelize, type) => {
    return sequelize.define('movie', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: type.STRING,
            unique: true
        },
        date: type.INTEGER,
        img: type.STRING,
        rate: type.INTEGER,
        // genre: type.STRING
        // characters: type.STRING
    });
}