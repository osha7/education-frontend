import React, { useState, useEffect } from 'react';
import Description from './description';

function Standards(props) {

    const [standards, setStandards] = useState('')

    useEffect(() => {
        fetch('https://api.commonstandardsproject.com/api/v1/standard_sets/49FCDFBD2CF04033A9C347BFA0584DF0_D2604890_grade-05',{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Api-Key": "HCNXXi4W8bkjoFDGyb6RTbf7"
            }
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            // debugger
            // setStandards(data["data"]["standards"])
            let standardsData = data["data"]["standards"]
            // debugger
            // console.log("standData", standardsData)
            var loopData = ''
            for(let [key, value] of Object.entries(standardsData)) {
                    // console.log(value["description"])
                    let dash = " - "
                    let description = value["description"]
                    loopData += `${description}${dash}`
            }
            console.log("loopdata", loopData)
            setStandards(loopData)
        })
    }, [])

    let newStandards = standards.split(' - ')

    const newStandardsMapped = () => {
        return newStandards.map(description => <Description 
            description={description}     
        />)
    }

    if (standards) {
        // debugger
        return (
            console.log("new standards", newStandards[0]),
            <div>
                <h1>STANDARDS</h1>
                <ul>
                    {newStandardsMapped()}
                </ul>
                
            </div>
        );
    } else {
        return (
            console.log(standards),
            <div>
                <h1>STANDARDS Nothing</h1>
            </div>
        );
    }
}

export default Standards;