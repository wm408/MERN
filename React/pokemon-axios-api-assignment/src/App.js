import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [pokeName, setPokeName] = useState([]);

useEffect(()=>{ //useEffect is just going to run whatever is inside of it.
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`) // play with this URL, and see the website for other tests.
    .then(response =>{
      console.log(response);
      console.log(response.data.results);
      setPokeName(response.data.results);
    })
    .catch((err)=>console.log(err))
},[]);

  return (
    <div className="App">
        <h1>Pokemon API w/ Axios</h1>
        {pokeName.map((name, index)=>{
          return(
            <div key={index}>
              <p>{name.name}</p>
            </div>
          )
        })}
    </div>
  );
}

export default App;