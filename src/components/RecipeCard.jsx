import React from "react";
import FoodGallery from "./FoodGallery";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe__card">
      <FoodGallery imgsrc={recipe.image} pt="65%" />
      <div className="recipe__card--info">
        <p className="recipe__card--title">{recipe.title}</p>
        <p className="recipe__card--description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odio
          excepturi adipisci...
        </p>
        <a className="recipe__card--btn" href="/">VIEW RECIPE</a>
      </div>
    </div>
  );
};

export default RecipeCard;
