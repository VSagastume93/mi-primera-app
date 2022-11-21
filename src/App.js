import React, {useEffect} from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';



function App() {

const initialUrl = "https://pokeapi.co/api/v2/pokemon/";

const fetchCharacters = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
