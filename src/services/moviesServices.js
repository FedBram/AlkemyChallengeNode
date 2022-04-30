import MovieContainer from "../db/containers/moviesContainer.js";
const movies = new MovieContainer()

const getAll = async (params) => {
    try{
        let data = await movies.getAll(params);
        return data;
    }catch(error){
        console.log(error);
    };
};

const createMovie = async (obj) => {
    try{
        await movies.create(obj);
        return obj;
    }catch(error){
        console.log(error);
    };
};

const updateMovie = async (obj, id) => {
    try{
        await movies.update(obj, id);
        return obj;
    }catch(error){
        console.log(error);
    };
};

const eraseMovie = async (id) => {
    try{
        await movies.delete(id)
    }catch(error){
        console.log(error);
    };
};


const getMovieById = async (params) => {
    try{
        let data = await movies.getById(params);
        return data;
    }catch(error){
        console.log(error);
    };
};


export {
    getAll,
    createMovie,
    updateMovie,
    eraseMovie,
    getMovieById
}