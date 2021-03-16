import React from 'react';

export default function Description(props) {
    // console.log("description", props)
    return(
        <li className="description">{props.description}</li>
    )
}