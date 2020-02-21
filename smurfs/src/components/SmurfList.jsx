import React from "react";
import { SmurfContext } from "../contexts/SmurfContext";

export default class SmurfList extends React.Component
{
    static contextType = SmurfContext;

    render()
    {
        return (
            <>
                {
                    this.context.smurfs.map((i)=>
                    {
                        return <div key={i.id}>
                                    <h1>{i.name}</h1>
                                    <h4>{i.age} years old</h4>
                                    <h4>{i.height}</h4>
                                    <button onClick={(e)=>{this.context.deleteSmurf(i.id)}}>Delete</button>
                                </div>
                    })
                }
            </>
        )
    }
}