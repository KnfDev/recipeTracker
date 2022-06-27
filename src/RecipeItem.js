import React from "react"

export default function RecipeItem({recipe, index, handleDeleteClick}) {
    return (
        <React.Fragment> 
        <tr>    
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt="foodPicture"/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td>{recipe.actions}<button name="delete" onClick={handleDeleteClick}>Delete</button></td>
        </tr>
      </React.Fragment>
    )
}