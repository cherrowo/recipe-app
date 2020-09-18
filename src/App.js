import React, {useEffect, useState} from 'react';
import './App.css';

const App = () =>{

  const APP_ID = '1feeff86';
  const APP_KEY = 'bf8f94d35627479acf333a305b5edfec';

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('Effect has been run');
  }, []);
  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">Search</button>
      </form>
        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
