import './App.css';
import React, {useState, useEffect} from 'react';
// import axios from 'axios';

function App() {

  const [pokeNumber, setPokeNumber] = useState([]);

useEffect(()=>{ //useEffect is just going to run whatever is inside of it.
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`) // play with this URL, and see the website for other tests.
    .then((response)=>{
      // console.log(res);
      // console.log(res.data);
      return response.json();
    })
    .then(response =>{
      setPokeNumber(response.results)
    })
    .catch((err)=>console.log(err))
}, []);

return (
  <div className="App">
    <ul>
      {
        pokeNumber.map((poke, index)=>{
          return (<li key={index}>{poke.name}</li>)
        })
      }
    </ul>
  </div>
);
}

export default App;
