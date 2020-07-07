import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
	return(
		<div className= {style.recipe}>
			<h2 className= {style.title_recipe} >{title}</h2>
			<img className = {style.image} src = {image} alt =" " />
			<p>Calories : {calories.toFixed(2)}</p>
			<ul>
				{ingredients.map(ingredient => 
					(
					 <li>{ingredient.text}</li>
					)
				  )
				}
			</ul>
		</div>
		);
};

export default Recipe;