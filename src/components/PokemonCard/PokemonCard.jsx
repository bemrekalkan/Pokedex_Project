// import { useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../pokemonList/PokemonList";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState("");

  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((response) => setPokemon(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  console.log(pokemonName);

  return (
    <div className="page">
      <div>
        <div className="header">
          {" "}
          <label htmlFor="header">POKEMON</label>
        </div>
        <input type="text" id="header" onChange={handleChange} />
      </div>
    </div>
  );
};

export default PokemonCard;
