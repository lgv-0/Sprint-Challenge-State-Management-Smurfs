import React from "react";
import { SmurfContext } from "../contexts/SmurfContext";

export default class SmurfList extends React.Component
{
    static contextType = SmurfContext;

    render()
    {
        return (
            <div>
                {
                    this.context.smurfs.map((i)=>
                    {
                        return <h1 key={i.id}>{i.name}</h1>
                    })
                }
            </div>
        )
    }
}