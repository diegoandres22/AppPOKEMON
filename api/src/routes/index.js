const { Router } = require('express');

// Ejemplo: const authRouter = require('./auth.js');
const { getPokemons, getPokemonsById, getPokemonsByName, postPokemon, updatePokemon, deletePokemon, getApiPokemons } = require('../controllers/pokemonsHandlers');
<<<<<<< HEAD
const { getTypeOfPokemons, postType, deleteType, postTypeBdd, getApiByType } = require('../controllers/typeHandlers');
=======
const { getTypeOfPokemons, postType, deleteType ,postTypeBdd } = require('../controllers/typeHandlers');
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
const { postUser, getUsers, deleteUser, getUserByEmail } = require('../controllers/usersHandler');

const router = Router();

// getPokemons & getPokemonByName // -------------------------------- POKEMONS-------------
router.get("/pokemon/get/", async (req, res) => {
    const { nombre } = req.query;

    try {

        const todos = await getPokemons();

        if (!nombre) return res.status(200).json(todos);

        const pokeFound = await getPokemonsByName(nombre);

        if (pokeFound.error) throw Error(pokeFound.error);

        return res.status(200).json(pokeFound);

    } catch (error) {
<<<<<<< HEAD
        return res.status(400).json({ error: error.message, description: `no hay pokemon que se llame: ${nombre}` });
=======
        return res.status(400).json({ error: error.message, description: `no hay pokemon que se llame: ${nombre}`});
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
    }
});
//  getPokemonsById
router.get("/pokemon/get/:id", async (req, res) => {
    const { id } = req.params;

    try {

        const pokemon = await getPokemonsById(id);

        // if (pokemon.error) throw Error(pokemon.error);

        return res.status(200).json(pokemon);

    } catch (error) {

        return res.status(400).json({ error: error.message, description: `no hay pokemon con el id: ${id} ` });
    }
});

// postPokemon
router.post("/pokemon/add", async (req, res) => {
    try {
        const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos } = req.body;

        if (!nombre || !imagen || !vida || !ataque || !defensa || !tipos) throw Error('Falta algún dato');

        const newPoke = await postPokemon(nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos);

        return res.status(200).json(newPoke);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});

router.put("/pokemon/edit", async (req, res) => {
    try {
        const { id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso } = req.body;

        if (!id) throw Error('Debes colocar el id');

        const pokeEdit = await updatePokemon(id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso)

        if (pokeEdit.error) throw Error(pokeEdit.error);

        return res.status(200).json(pokeEdit);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});

router.delete("/pokemon/delete/:id", async (req, res) => {

    try {
        const { id } = req.params;

        if (!id) throw Error('Debes colocar el id')

        const pokedeleted = await deletePokemon(id);

        if (pokedeleted.error) throw Error(pokedeleted.error);

        return res.status(200).json(pokedeleted);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});
//-------------------POKEMONS API--------------------------
router.get("/pokemonapi/get/", async (req, res) => {
<<<<<<< HEAD

=======
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
    try {

        const todos = await getApiPokemons();

<<<<<<< HEAD
        if (!todos) throw Error('no hay');

        return res.status(200).json(todos);

    } catch (error) {
        res.status(404).send(error.message);
    }
});
// filtrado por tipo
router.get("/pokemonapi/getByType/", async (req, res) => {

    const { type } = req.query;

    try {

        if (!type) throw Error('Debes colocar el tipo');

        const todos = await getApiByType(type);

        if (todos.error) throw Error(todos.error);
=======
        if (!todos) throw Error(todos.error);
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f

        return res.status(200).json(todos);

    } catch (error) {
        res.status(404).send(error.message);
    }
});


// ---------------------------------------------------------------TIPOS  -----------------
router.get("/type/get", async (req, res) => {
    try {

        const types = await getTypeOfPokemons();

        return res.status(200).json(types);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});
router.post("/type/add", async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) throw Error('Falta el tipo');

        const newType = await postType(name);

        return res.status(200).json(newType);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});
router.post("/type/bddadd", async (req, res) => {
    try {
<<<<<<< HEAD

=======
        
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
        const newType = await postTypeBdd();

        return res.status(200).json(newType);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});
router.delete("/type/delete/:id", async (req, res) => {

    try {
        const { id } = req.params;

        if (!id) throw Error('Debes colocar el id')

        const typedeleted = await deleteType(id);

        if (typedeleted.error) throw Error(typedeleted.error);

        return res.status(200).json(typedeleted);

    } catch (error) {
        return res.status(400).json(error.message);
    }
});
// -----------------------------------------------------------LOGEO DEL USUARIO-------------

router.get("/users/get/", async (req, res) => {
    try {
        const { email } = req.query;

        const todos = await getUsers();

        if (!email) return res.status(200).json(todos);

        const userFound = await getUserByEmail(email);

        if (userFound.error) throw Error(userFound.error);

        return res.status(200).json(userFound);

    } catch (error) {

        res.status(404).send(error.message);
    }
});

router.post("/users/add", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!password || !email) throw Error('Bebe añadir un email y una clave')

        const newUser = await postUser(email, password);

        return res.status(200).json(newUser);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});

router.delete("/users/delete/:id", async (req, res) => {

    try {
        const { id } = req.params;

        if (!id) throw Error('Debes colocar el id')

        const userdeleted = await deleteUser(id);

        if (userdeleted.error) throw Error(userdeleted.error);

        return res.status(200).json(userdeleted);

    } catch (error) {
        return res.status(404).send(error.message);
    }
});




module.exports = router;
