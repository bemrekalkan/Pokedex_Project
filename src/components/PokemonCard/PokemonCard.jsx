// import { useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../pokemonList/PokemonList";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
  );

  useEffect(() => {
    axios.get("");

    return () => {
      second;
    };
  }, []);

  return <></>;
};

export default PokemonCard;
