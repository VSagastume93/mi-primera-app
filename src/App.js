import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';


function App() {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);


  return (
    <div className="App">
      <Header></Header>
      <Body characters = {characters}></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
