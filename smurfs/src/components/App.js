import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component
{
  constructor()
  {
    super();

    this.state = 
    {
      smurfs:[]
    }

    this.getSmurfs = this.getSmurfs.bind(this);
  }

  componentDidMount()
  {
    this.getSmurfs();
  }

  getSmurfs()
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
        
        <SmurfContext.Provider value={{smurfs:this.state.smurfs, getSmurfs:this.getSmurfs}}>
          <SmurfList />
          <SmurfForm />
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;