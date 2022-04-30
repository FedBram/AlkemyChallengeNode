import { movie } from "../modelExports.js";

class MovieContainer {
   
    constructor(){
        this.table = movie;
    };

    async getAll(params){
        try{
            let data = await this.table.findAll(params);
            return data;
        }catch(error){
            console.log(error);
        };
    };

    async getById(params){
        try{
            let data = await this.table.findOne(params);
            return data;
        }catch(error){
            console.log(error);
        };
    };

    async create(obj){
        try{
            await this.table.create(obj);
        }catch(error){
            console.log(error);
        };
    };

    async update(obj, id){
        try{
            await this.table.update(obj, {where: {id: id}});
        }catch(error){
            console.log(error);
        };
    };

    async delete(id){
        try{
            await this.table.destroy({where: {id: id}});
        }catch(error){
            console.log(error);
        };
    };
};

export default MovieContainer;