import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () =>
{
const APP_ID = "c9c93487";
const APP_key = "fbb1bf8f6d8560577efdaa683b3dcb65";

const [counter , setCounter ] = useState(0);
const [recipe , setRecipe ] = useState([]);
const [search , setSearch ] = useState('');
const [query , setQuery ] = useState('shake');

useEffect( () => {Getrecipe(); }, [query]);

const Getrecipe = async () =>
{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`); 
  const data = await response.json();
  setRecipe(data.hits);
};

const updateSearch = e =>
{
  setSearch(e.target.value);
};

const getSearch = e =>
{
  e.preventDefault();
  setQuery(search);
};

  return (
    <div className="App">
      <header className="App-header">
        <div className ="h1">HUNGRY ??</div>
        <form onSubmit = {getSearch} className= "Search-form">
          <input className = "Search-field" type = "text" value = {search} onChange = {updateSearch} placeholder = "Search your favorite food" />
          <button className= "Submit-button" type = "submit" >
            Go
          </button>
        </form>
         <div className="recipes" >
        {recipe.map(recipes => (
          <Recipe
           key = {recipes.recipe.uri}
           title = {recipes.recipe.label} 
           calories = {recipes.recipe.calories}
           image = {recipes.recipe.image}
           ingredients = {recipes.recipe.ingredients}
          />
          )
          )
        }
        </div>
      </header>
      <div className ="page-footer">
       <div className="jsx-2103149337">
        <a href = "https://www.github.com/angabiazam" target="_blank">
        <img src="https://img.icons8.com/windows/64/000000/github.png" class="jsx-2103149337-imageLogo1" alt ="facebook-logo"/>
        </a>
        <a href = "https://www.linkedin.com/in/angabiazam" target="_blank">
        <img src="https://img.icons8.com/windows/64/000000/linkedin-2.png" class="jsx-2103149337-imageLogo2" alt ="linkedin-logo"/>
        </a>
        <a href = "https://www.youtube.com/angabiazam" target="_blank">
        <img src="https://img.icons8.com/material/64/000000/youtube-play--v1.png" class="jsx-2103149337-imageLogo3" alt ="twitter-logo"/>
        </a>
        <p class="text-center">© 2020 Made with React.</p>
        <div class="personal-info">
        <div class ="creator">Created by :<b> Angabi Azam</b></div>
        <div class="mail-details"><img src="https://img.icons8.com/windows/64/000000/gmail.png" class="jsx-2103149337-imageLogo4" alt = "mail-logo"/><p class="mail-id">angabiazam@gmail.com</p></div>
        <div class="phone-details"><img src="https://img.icons8.com/ios-glyphs/32/000000/phone--v1.png" class="jsx-2103149337-imageLogo5" alt = "phone-logo"/><p class="phone-number">+91-8210067354</p></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
