import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";
import SmurfList from "./SmurfList";

class App extends Component
{
  constructor()
  {
    super();

    this.state = 
    {
      smurfs:[]
    }
  }

  componentDidMount()
  {
    Axios.get("http://localhost:3333/smurfs").then((response)=>
    {
      this.setState({smurfs:response.data});
    })
  }

  render()
  {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        
        <SmurfContext.Provider value={{smurfs:this.state.smurfs}}>
          <SmurfList />
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;