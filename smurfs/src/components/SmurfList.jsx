import React from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import Smurf from "./Smurf";

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
                        return <Smurf key={i.id} smurf={i} />
                    })
                }
            </>
        )
    }
}