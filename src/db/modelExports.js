import { sequelize, Sequelize } from "./config/sequelizeConfig.js";
import charactersModel from "./models/charactersModel.js";
import moviesModel from "./models/moviesModel.js";
import genresModel from "./models/genresModel.js";
import usersModel from "./models/usersModels.js";



const character = charactersModel(sequelize, Sequelize);
const movie = moviesModel(sequelize, Sequelize);
const genre = genresModel(sequelize, Sequelize);
const user = usersModel(sequelize, Sequelize);

movie.hasMany(character);
character.belongsTo(movie);
genre.hasMany(movie);
movie.belongsTo(genre);



export {
    character, 
    movie, 
    genre, 
    user 
} ;