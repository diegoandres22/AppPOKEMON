import axios from 'axios';

import { GET_POKEMONS, NEXT_PAGE, BACK_PAGE, ORDER_POKEMONS, FILTER_POKEMONS, BY_BASE_LOCAL, GET_POKEMON_id, GET_POKEMON_NAME,  } from './actionsType';


export const getPokemons = () => {
    return async (dispatch) => {
        const databdd = await axios.get("http://localhost:3001/pokemon/get");
        const pokemonsb = databdd.data;
        const dataapi = await axios.get("http://localhost:3001/pokemonapi/get/");
        const pokemonsa = dataapi.data;

        dispatch({ type: GET_POKEMONS, payload: [...pokemonsb, ...pokemonsa] });
    };
};

export const nextPage = () => {
    return async (dispatch) => {

        dispatch({ type: NEXT_PAGE });
    };
};
export const backPage = () => {
    return async (dispatch) => {

        dispatch({ type: BACK_PAGE });
    };
};

export const orderPokemons = (order) => {
    return { type: ORDER_POKEMONS, payload: order };
};

export const filterPokemons = (type) => {
    return async (dispatch) => {

        dispatch({ type: FILTER_POKEMONS, payload: type });
    };
};
export const getByOrigin = (origen) => {
    return { type: BY_BASE_LOCAL, payload: origen };
};

export const getPokemonById = (id) => {

    return async (dispatch) => {

        dispatch({ type: GET_POKEMON_id, payload: id });
    };
};
export const getPokemonByName = (name) => {


    return async (dispatch) => {
        const resp = await axios.get(`http://localhost:3001/pokemon/get/?nombre=${name}`);
        const pokemonByName = resp.data;

        console.log(pokemonByName);
        dispatch({ type: GET_POKEMON_NAME, payload: pokemonByName });
    };
};


export const postPokemon = (pokemon) => {
    return async () => {
        const post = await axios.post(`http://localhost:3001/pokemon/add`, pokemon);
        console.log(post);
        return post;
    };
};

export const deletePokemon = (idPokemon) => {
    return async () => {
        const post = await axios.delete(`http://localhost:3001/pokemon/delete/${idPokemon}`);
        return post;
    };
};
// 