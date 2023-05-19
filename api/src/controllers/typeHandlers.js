require("dotenv").config();
const { Types } = require('../db');
const axios = require("axios");

<<<<<<< HEAD
const url_api_tipes = "https://pokeapi.co/api/v2/type";

=======
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
const getTypeOfPokemons = async () => {

    const types = await Types.findAll();

    return types;
};

const postType = async (name) => {

    const newType = {
        name
    };

    const type = await Types.create(newType);

    return type;
}
const deleteType = async (id) => {

    const type = await Types.findByPk(id);

    if (!type) return { error: "No existe tipo con ese id" };

    await Types.destroy({
        where: {
            id
        }
    })

    return "Tipo eliminado correctamente"
}
const postTypeBdd = async () => {

    // const newType = { name };
    // const type = await Types.create(newType);
    let types = await Types.findAll();
<<<<<<< HEAD

    const response = await axios.get(`${url_api_tipes}`);
=======
    
    const response = await axios.get('https://pokeapi.co/api/v2/type');
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
    const apiTypes = response.data.results.map((type) => ({
        name: type.name,
    }));
    types = await Types.bulkCreate(apiTypes);

    return "tipos cargados con éxito";
}
<<<<<<< HEAD
const getApiByType = async (type) => {

    let result = [];

    for (let i = 1; i < 100; i++) {

        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = response.data;

        let verification = pokemon.types.map(type => type.type.name)

        if (verification.includes(type)) {

            let pokeApi = {
                id: pokemon.id,
                nombre: pokemon.name,
                imagen: pokemon.sprites.other.dream_world.front_default,
                vida: pokemon.stats[0].base_stat,
                ataque: pokemon.stats[1].base_stat,
                defensa: pokemon.stats[2].base_stat,
                velocidad: pokemon.stats[5].base_stat,
                altura: pokemon.height,
                peso: pokemon.weight,
                types: pokemon.types.map((type) => type.type.name),
            };
            result.push(pokeApi);
        }
    }
    if (!result.length) return { error: "No hay pokemones con ese tipo" };

    return result;
};
=======

>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f

module.exports = {
    getTypeOfPokemons,
    postType,
    deleteType,
<<<<<<< HEAD
    postTypeBdd,
    getApiByType
=======
    postTypeBdd
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
}