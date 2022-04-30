import { character } from '../db/modelExports.js';
import {
    getAll,
    createMovie,
    updateMovie,
    eraseMovie,
    getMovieById
} from './../services/moviesServices.js';


const getMovies = async (req, res) => {
    try{
        if(req.query.name != undefined){
            let data = await getAll({
                attributes: ['title', 'date', 'img'],
                where: {title: req.query.name}
            });
            if(data.length == 0){
                res.send("Movie not found");
            }else{
                res.json(data);
            };
        }else if(req.query.genre != undefined){
            let data = await getAll({
                attributes: ['title', 'date', 'img'],
                where: {genreId: req.query.genre}
            });
            if(data.length == 0){
                res.send("Movie not found");
            }else{
                res.json(data);
            };
        }else if(req.query.order == 'ASC'){
            let data = await getAll({
                attributes: ['title', 'date', 'img'],
                order: [['date', 'ASC']]
            });
            res.json(data);
        }else if(req.query.order == 'DESC'){
            let data = await getAll({
                attributes: ['title', 'date', 'img'],
                order: [['date', 'DESC']]
            });
            res.json(data);
        }else{
            let data = await getAll({
                attributes: ['title', 'date', 'img']
            });
            res.json(data);
        };
    }catch(error){
        let err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

const postMovies = async (req, res) => {
    try{
        const data = await createMovie({...req.body});
        res.json({message: 'Movie created', data: data});
    }catch(error){
        let err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

const putMovies = async (req, res) => {
    try{
        const data = await updateMovie({...req.body}, req.params.id);
        res.json({message: 'Movie updated', data: data});
    }catch(error){
        let err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

const deleteMovie = async (req, res) => {
    try{
        await eraseMovie(req.params.id);
        res.json({message: "Movie deleted"});
    }catch(error){
        let err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

const getMovieDetails = async (req, res) => {
    try{
        let data = await getMovieById({
            attributes: ['title', 'date', 'rate', 'img'],
            include: { model: character },
            where: {id: req.params.id}
        });
        if(data != null){
            res.json(data);
        }else{
            res.json({message: 'Movie not found'});
        }
    }catch(error){
        let err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

export {
    getMovies,
    postMovies,
    putMovies,
    deleteMovie,
    getMovieDetails
};