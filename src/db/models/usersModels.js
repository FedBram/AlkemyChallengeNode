export default (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: type.STRING,
        password: type.STRING
    });
}