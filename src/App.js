import React, {useEffect, useState} from 'react';
import './App.css';

import Recipe from './recipe';

const App = () =>{

  const APP_ID = '1feeff86';
  const APP_KEY = 'bf8f94d35627479acf333a305b5edfec';

  const [recipes, setRecipes] = useState([]); //stores recipes in array
  const [search, setSearch] = useState(''); //allows users to use search bar
  const [query, setQuery] = useState('chicken'); //creates queries

  useEffect( () => {
    getRecipes();
  }, [query]); //updates afetr form submitted

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json(); //await because of delay from external API, json formats it into easy to work with format
    setRecipes(data.hits);
    console.log(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(''); //resets the search bar
  }
  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe
              key={recipe.recipe.label} //unique ID for each item so React renders faster
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
        ))};

      </div>

    </div>
  );
}

export default App;
