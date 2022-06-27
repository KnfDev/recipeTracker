import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  const [recipes, setRecipes] = useState([...RecipeData]);

  function createRecipe(recipe) {
    setRecipes([...recipes,recipe])
  }

  function deleteRecipe(target) {
    setRecipes(recipes.filter((_,index)=> index !== target))
  }


  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <React.Fragment>
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe} recipes={recipes}/>
    </div>
    </React.Fragment>
  );
}

export default App;
