export default (sequelize, type) => {
    return sequelize.define('genre', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING,
            unique: true
        },
        img: type.STRING,
        // movies: type.STRING
    });
}