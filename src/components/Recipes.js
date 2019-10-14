import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => {
  return (
    <div className="container">
      <div className="row">
        {/* getting data to display on our screen using the map method */}
        {props.recipes.map(recipe => {
          return (
            // react wants to know what each element is so we have to add the key prop to our p tag. Doesn't matter what we put into it, as long as it's different from anything else we've declared
            <div
              key={recipe.title}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img
                  className="recipes__box-img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className="recipe__text">
                  {/* using js substring method */}
                  <h5 className="recipes__title">
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    Publisher: <span>{recipe.publisher}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title }
                    }}
                  >
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
