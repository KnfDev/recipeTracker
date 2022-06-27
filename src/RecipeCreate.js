import React, { useState } from "react";

function RecipeCreate({ createRecipe,recipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const form = [
    {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    }
  ]
  // console.log(createRecipe,recipes)

  const [formData, setFormData] = useState(form);
  
  const handleChange = (event) => {
    const {target} = event;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  // console.log(formData)

  const handleSubmit = (event) => {
    event.preventDefault();

    createRecipe(formData);
    event.target.reset();
    setFormData(form)
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"/>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="name"
                required
              />
            </td>
            <td>
            <label htmlFor="cuisine"/>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                placeholder="cuisine"
                required
              />
            </td>
            <td>
            <label htmlFor="url"/>
              <input id="url" 
              type="url"
              name="photo" 
              onChange={handleChange} 
              placeholder="url"
              required
              />
            </td>
            <td>
            <label htmlFor="ingredients"/>
              <textarea 
              name="ingredients"
              placeholder="ingredients"
              onChange={handleChange}
              required 
              />
            </td>
            <td>
            <label htmlFor="preparation"/>
              <textarea 
              name="preparation"
              onChange={handleChange} 
              placeholder="preparation"
              required
              />
            </td>
            <td>
              <button type="submit">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
