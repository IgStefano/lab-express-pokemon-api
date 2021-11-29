const express = require("express");
const pokemon = require("./routes/pokemon.js");
const querySearch = require("./routes/querySearch.js");

const PORT = 4000;

// Importing all the pokemon for our data file
const allPokemon = require("./data");

const app = express();

// -- Define your route listeners here! --c

app.use(express.json());
app.use("/pokemon", pokemon);
app.use("/search", querySearch);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
