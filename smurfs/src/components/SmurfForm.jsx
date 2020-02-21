import React from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import Axios from "axios";

export default class SmurfForm extends React.Component
{
    static contextType = SmurfContext;

    constructor()
    {
        super();

        this.state = 
        {
            nameinput:"Josh",
            ageinput: 200,
            heightinput: 5
        }

        this.submitSmurf = this.submitSmurf.bind(this);
        this.nameCB = this.nameCB.bind(this);
        this.ageCB = this.ageCB.bind(this);
        this.heightCB = this.heightCB.bind(this);
    }

    submitSmurf(e)
    {
        e.preventDefault();

        let newSmurf =
            {
                name: e.target.name.value,
                age: parseInt(e.target.age.value),
                height: e.target.height.value + "cm"
            }

        Axios.post("http://localhost:3333/smurfs", newSmurf).then((response)=>
        {
            this.context.getSmurfs();
        }).catch((error)=>
        {
            //Unhandled
        })
    }

    nameCB(e) { this.setState({nameinput:e.target.value}); }
    ageCB(e) { this.setState({ageinput:e.target.value}); }
    heightCB(e) { this.setState({heightinput:e.target.value}); }

    render()
    {
        return (
            <form onSubmit={this.submitSmurf}>
                <input type="text" name="name" placeholder="Name" value={this.state.nameinput} onChange={this.nameCB} />
                <br />
                <input type="number" name="age" value={this.state.ageinput} onChange={this.ageCB} />
                <br />
                <input type="number" name="height" value={this.state.heightinput} onChange={this.heightCB} />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}