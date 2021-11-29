const express = require("express");
const app = express();
const allPokemon = require("../data");

const querySearch = app.get("/", (req, res, next) => {
  const filteredPokemon = allPokemon.filter((currentPokemon) => {
    return (
      currentPokemon.name === req.query.name ||
      currentPokemon.types.includes(req.query.types)
    );
  });
  res.status(200).json(filteredPokemon);
});

module.exports = querySearch;
