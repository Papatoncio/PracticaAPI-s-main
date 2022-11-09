import mongoose from "mongoose";


//Descomentar para coneccion local
mongoose
  .connect("mongodb://localhost/pokedexDb")
  .then((db) => console.log("DB is connect"))
  .catch((error) => console.log(error));
