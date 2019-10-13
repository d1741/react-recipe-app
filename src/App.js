import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  //method that gets the API call
  getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        {/*add getRecipe in order to pass props to Form.js */}
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
