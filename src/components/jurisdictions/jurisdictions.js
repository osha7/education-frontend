import React, { useState, useEffect } from 'react';

function Jurisdictions(props) {

    const [jurisdictions, setJurisdictions] = useState([])

    useEffect(() => {
        fetch('https://api.commonstandardsproject.com/api/v1/jurisdictions',{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Api-Key": "HCNXXi4W8bkjoFDGyb6RTbf7"
            }
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            <h1>JURISDICTIONS</h1>
        </div>
    );
}

export default Jurisdictions;