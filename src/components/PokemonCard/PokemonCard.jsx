// import { useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../pokemonList/PokemonList";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((response) => setPokemon(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return <></>;
};

export default PokemonCard;
