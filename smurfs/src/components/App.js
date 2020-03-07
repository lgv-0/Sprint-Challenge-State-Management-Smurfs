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
      smurfs:[],
      errorMsg:""
    }

    this.setError = this.setError.bind(this);
    this.getSmurfs = this.getSmurfs.bind(this);
    this.addSmurf = this.addSmurf.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
  }

  componentDidMount()
  {
    this.getSmurfs();
  }

  setError(inc)
  {
    this.setState({errorMsg:inc});
  }

  getSmurfs()
  {
    Axios.get("http://localhost:3333/smurfs").then((response)=>
    {
      this.setState({smurfs:response.data});
      this.setError("");
    }).catch((error)=>
    {
      this.setError(error.response.data.Error);
    })
  }

  addSmurf(smurf)
  {
    Axios.post("http://localhost:3333/smurfs", smurf).then((response)=>
    {
        this.getSmurfs();
        this.setError("");
    }).catch((error)=>
    {
      this.setError(error.response.data.Error);
    })
  }

  deleteSmurf(id)
  {
    Axios.delete(`http://localhost:3333/smurfs/${id}`).then((response)=>
    {
      this.setState({smurfs:response.data});
      this.setError("");
    }).catch((error)=>
    {
      this.setError(error.response.data.Error);
    })
  }

  render()
  {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        
        {this.state.errorMsg != "" ? <h1>{this.state.errorMsg}</h1> : null}

        <SmurfContext.Provider value={{smurfs:this.state.smurfs, getSmurfs:this.getSmurfs, addSmurf:this.addSmurf, deleteSmurf:this.deleteSmurf}}>
          <SmurfList />
          <SmurfForm />
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;