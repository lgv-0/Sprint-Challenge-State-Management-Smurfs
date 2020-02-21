import React from "react";

export default function Smurf(props)
{
    return (
        <>
            <h1>{props.smurf.name}</h1>
            <h4>{props.smurf.age} years old</h4>
            <h4>{props.smurf.height}</h4>
        </>
    );
}