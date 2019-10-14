import React from "react";
import { Link } from "react-router-dom";

const API_KEY = "1cd8aef89003bc617261fcfc94c1ba0b";
//convert this to a class based component so we can use state to display the recipe on the screen:

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    // console.log(res.recipes[0]);
    this.setState({ activeRecipe: res.recipes[0] });
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {/* this line helps load the picture faster by checking whether or not there is something in activeRecipe state */}
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.source_url}>{recipe.source_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
