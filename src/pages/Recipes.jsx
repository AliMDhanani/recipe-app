import React from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const Recipes = () => {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/food-gallery/img_1.jpg",
  }, 
  {
      title: "Spaghetti and Meatballs",
      image: "/img/food-gallery/img_4.jpg",
  },
  {
      title: "American Cheese Burger",
      image: "/img/food-gallery/img_5.jpg",
  },
  {
      title: "Mutton Biriyani",
      image: "/img/food-gallery/img_6.jpg",
  },
  {
      title: "Japanese Sushi",
      image: "/img/food-gallery/img_10.jpg",
  },
  {
      title: "Chicken Pan Pizza",
      image: "/img/food-gallery/img_1.jpg",
  }, 
  {
      title: "Spaghetti and Meatballs",
      image: "/img/food-gallery/img_4.jpg",
  },
  {
      title: "American Cheese Burger",
      image: "/img/food-gallery/img_5.jpg",
  },
  {
      title: "Mutton Biriyani",
      image: "/img/food-gallery/img_6.jpg",
  },
  {
      title: "Japanese Sushi",
      image: "/img/food-gallery/img_10.jpg",
  },
  {
      title: "American Cheese Burger",
      image: "/img/food-gallery/img_5.jpg",
  },
  {
      title: "Mutton Biriyani",
      image: "/img/food-gallery/img_6.jpg",
  }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <SearchBar />
      <div className="recipe__card--container">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
      </div>
    </div>
  )
}

export default Recipes
