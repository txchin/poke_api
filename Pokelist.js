import React , {useState , useEffect} from 'react';
import Pokecard from './Pokecard';
import '../App.css';

function Pokelist(){
    const [pokemons,setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    });

    const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(pokes => setPokemons(pokes.results))
    };

    return (
        <div className="App">
            <div className="pokedex">
                <img src="http://pngimg.com/uploads/pokeball/pokeball_PNG8.png" width="60px" height="60px" />
                <h2>POKEDEX</h2>
            </div>
            {pokemons.map((pokemon,i) => (
                <Pokecard id={i+1} key={i} name={pokemon.name}/>
            ))}
        </div>
    );
}

export default Pokelist;