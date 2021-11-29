const express = require("express");
const app = express();
const allPokemon = require("../data");

const pokemon = app.get("/", (req, res) => {
  res.status(200).json(allPokemon);
});

const singlePokemon = app.get("/:id", (req, res) => {
  const indexToSubstitute = allPokemon.findIndex((currentPokemon) => {
    return currentPokemon.id === parseInt(req.params.id);
  });
  res.status(200).json(allPokemon[indexToSubstitute]);
});

app.post("/", (req, res) => {
  allPokemon.push({ id: allPokemon.length + 1, ...req.body });
  return res.status(201).json({ ...allPokemon[allPokemon.length - 1] });
});

app.put("/:id", (req, res) => {
  const indexToSubstitute = allPokemon.findIndex((currentPokemon) => {
    return currentPokemon.id === parseInt(req.params.id);
  });
  allPokemon[indexToSubstitute] = {
    ...allPokemon[indexToSubstitute],
    ...req.body,
  };
  res.status(200).json({ ...allPokemon[indexToSubstitute] });
});

let deletedPokemon;

app.delete("/:id", (req, res) => {
  const indexToSubstitute = allPokemon.findIndex((currentPokemon) => {
    return currentPokemon.id === parseInt(req.params.id);
  });
  deletedPokemon = allPokemon[indexToSubstitute].name;
  allPokemon.splice([indexToSubstitute], 1);
  res.status(200).json(`Successfully deleted ${deletedPokemon}`);
});

module.exports = pokemon;
