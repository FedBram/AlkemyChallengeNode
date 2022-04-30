import { 
    getAll, 
    createCharacter, 
    updateCharacter, 
    eraseCharacter, 
    getCharacterById 
} from "../services/charactersServices.js";

import { movie } from "../db/modelExports.js";

const getCharacters = async (req, res) => {
    try{
        if(req.query.movies != undefined){
            let data = await getAll({
                attributes: ['name', 'img'], 
                where: {movieId: req.query.movies}
            });
            if(data.length == 0){
                res.send({message: "Character not found"});
            }else{
                res.json(data);
            };
        }else if(req.query.name != undefined){
            let data = await getAll({
                attributes: ["name", "img"],
                where: {name: req.query.name}
            });
            if(data.length == 0){
                res.send({message: "Character not found"});
            }else{
                res.json(data);
            };
        }else if(req.query.age != undefined){
            let data = await getAll({
                attributes: ["name", "img"],
                where: {age: req.query.age}
            });
            if(data.length == 0){
                res.send({message: "Character not found"});
            }else{
                res.json(data);
            };
        }else{
            let data = await getAll({attributes: ['name', 'img']});
            res.json(data);
        };
    }catch(error){
        const err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

const postCharacter = async (req, res) => {
    try{
        const data = await createCharacter({...req.body});
        res.json({message: 'Character created', data: data});
    }catch(error){
        const err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

const putCharacter = async (req, res) => {
    try{
        const data = await updateCharacter({...req.body}, req.params.id);
        res.json({message: 'Character modified', data: data});
    }catch(error){
        const err = {
            name: error.name,
            message: error.message
        }
        res.send(err);
    };
};

const deleteCharacter = async (req, res) => {
    try{
        await eraseCharacter(req.params.id);
        res.json({message:'Character erased'});
    }catch(error){
        const err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

const getCharacterDetails = async (req, res) => {
    try{
        const data = await getCharacterById({
            include: { model: movie },
            attributes: ["name", 'age', 'weigth', 'story', 'img'], 
            where: {id: req.params.id}
        });
        if(data == null){
            res.status(404).send("Character not found");
        }else{
            res.json(data);
        };
    }catch(error){
        const err = {
            name: error.name,
            message: error.message
        };
        res.send(err);
    };
};

export { 
    getCharacters, 
    postCharacter, 
    putCharacter, 
    deleteCharacter, 
    getCharacterDetails 
};