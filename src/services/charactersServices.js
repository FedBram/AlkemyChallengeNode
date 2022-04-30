import CharactersContainer from "../db/containers/charactersContainer.js";
const characters = new CharactersContainer()

const getAll = async (params) => {
    try{
        let data = await characters.getAll(params)
        return data
    }catch(err){
        console.log(err)
    }
}

const createCharacter = async (obj) => {
    try{
        await characters.create(obj)
        return obj
    }catch(err){
        console.log(err)
    }
}

const updateCharacter = async (obj, id) => {
    try{
        await characters.update(obj, id)
        return obj
    }catch(err){
        console.log(err)
    }
}

const eraseCharacter = async (id) => {
    try{
        await characters.delete(id)
    }catch(err){
        console.log(err)
    }
}

const getCharacterById = async (id) => {
    try{
        let data = await characters.getById( id)
        return data
    }catch(err){
        console.log(err)
    }
}

export { 
    getAll, 
    createCharacter, 
    updateCharacter, 
    eraseCharacter, 
    getCharacterById 
}