import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
const API_KEY = "1cd8aef89003bc617261fcfc94c1ba0b";

class App extends Component {
  //introducing state to our project:
  state = {
    //what kind of state do we want to keep track of?
    recipes: []
  };
  //method that gets the API call
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    //make initial API call (doesn't do anything else)
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=1`
    );
    //whatever we get back from this api will be stored in the data constant below
    const data = await api_call.json();
    //to make use of our state, use built-in setState method to set this piece of data to our state recipe array:
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        {/*add getRecipe in order to pass props to Form.js */}
        <Form getRecipe={this.getRecipe} />
        {/* pass recipes state down to our recipes component using props*/}
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

// https://www.food2fork.com/api/search?key=1cd8aef89003bc617261fcfc94c1ba0b&q=chicken%20breast&page=2
