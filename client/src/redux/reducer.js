import { GET_POKEMONS, BACK_PAGE, NEXT_PAGE, ORDER_POKEMONS, FILTER_POKEMONS, BY_BASE_LOCAL, GET_POKEMON_id, GET_POKEMON_NAME, POST_POKEMON, DELETE_POKEMON } from "./actionsType";
const initialState = {
    aPokemon: [],
    pokemons: [],
    pokemonsFyO: [],
    page: 1
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                pokemonsFyO: payload
            };

        case NEXT_PAGE:
            return { ...state, page: state.page + 1 };
        case BACK_PAGE:
            return { ...state, page: state.page - 1 };

        case FILTER_POKEMONS:
            const pokeFiltred = state.pokemons.filter(poke => {
                let veri = poke.types;
                if (veri.includes(payload)) return poke;

            })

            return {
                ...state,
                pokemonsFyO: pokeFiltred

            };

        case ORDER_POKEMONS:
            const orderPokemons = [...state.pokemonsFyO]
            return {
                ...state,
                pokemonsFyO:
                    payload === "A"
                        ? orderPokemons.sort((a, b) => a.ataque - b.ataque)
                        : orderPokemons.sort((a, b) => b.ataque - a.ataque)
            };


        case BY_BASE_LOCAL:
            if (payload === "base") {
                return {
                    ...state,
                    pokemonsFyO: state.pokemons.filter(poke => poke.id.length > 15)
                };
            }
            if (payload === "api") {

                const filtId = state.pokemons.filter(poke => poke.id < 500);
                return {
                    ...state,
                    pokemonsFyO: [...filtId]
                };
            } if (payload === "todos") {
                return {
                    ...state,
                    pokemonsFyO: [...state.pokemons]
                }
            }
        case GET_POKEMON_id:
            if (payload.length > 20) {
                return {
                    ...state,
                    aPokemon: state.pokemons.filter(poke => poke.id === payload)
                };
            }
            return {
                ...state,
                aPokemon: state.pokemons.filter(poke => poke.id === +payload)

            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                aPokemon: payload
            };

        case POST_POKEMON:
            return {
                ...state,
            };
        case DELETE_POKEMON:
            return {
                ...state,
            };

        default:
            return { ...state };

    }
};

export default rootReducer;

// 