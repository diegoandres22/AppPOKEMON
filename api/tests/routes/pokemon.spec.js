/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemons, conn } = require('../../src/db.js');

const agent = session(app);
const pokemons = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Pokemons.sync({ force: true })
    .then(() => Pokemons.create(pokemons)));
  describe('GET http://localhost/pokemon/get/:id', () => {
    it('should get 200', () =>
      agent.get('http://localhost/pokemon/get/25').expect(200)
    );
  });
});
//  describe('Pokemon routes', () => {
//  before(() => conn.authenticate()
//  .catch((err) => {
//  console.error('Unable to connect to the database:', err);
//  }));
//  beforeEach(() => Pokemon.sync({ force: true })
//  .then(() => Pokemon.create(pokemon)));
//  describe('GET /pokemon/get/:id', () => {
//  it('Responde con status: 200', async () => {
//  const respu = await agent.get('/pokemons/get/25');
//  expect(respu.statusCode).toBe(200);
//  });
//  });
//  });
