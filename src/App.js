import React, {useEffect, useState} from 'react';
import './App.css';

import Recipe from './recipe';

const App = () =>{

  const APP_ID = '1feeff86';
  const APP_KEY = 'bf8f94d35627479acf333a305b5edfec';

  const [recipes, setRecipes] = useState([]); //stores recipes in array

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json(); //await because of delay from external API, json formats it into easy to work with format
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe
          key={recipe.recipe.label} //unique ID for each item so React renders faster
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}/>
      ))};
    </div>
  );
}

export default App;
