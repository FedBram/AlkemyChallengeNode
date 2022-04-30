import { Sequelize } from "sequelize";
import ParsedArgs from './../../configs/minimistConfig.js'


const sequelize = new Sequelize('alkemydisney', 'root', "", {
    host: ParsedArgs.db_host,
    dialect: 'mysql'
  });

sequelize.sync({force:false}).then(() => {
    console.log("Connection to Data Base: succesful")
}).catch(err => {
    console.log("Data base connection error", err)
})


export { 
    sequelize,
    Sequelize
} 