import React from "react";
import Table from "./Table";

function FinalStats() {
    
    const paceStats = [
        {name:"Acceleration", value: "79"}, 
        {name: "Sprint Speed", value: "77"}
    ];

    const shootingStats = [
        {name:"Positioning", value: "90"},
        {name:"Finishing", value: "90"},
        {name:"Shot Power", value: "90"},
        {name:"Long Shots", value: "82"},
        {name:"Volleys", value: "90"},
        {name:"Penalties", value: "89"}
    ];

    const passingStats = [
        {name:"Vision", value: "90"},
        {name:"Crossing", value: "81"},
        {name:"FK Accuracy", value: "62"},
        {name:"Short Passing", value: "90"},
        {name:"Long Passing", value: "80"},
        {name:"Curve", value: "90"}
    ];

    const dribblingStats = [
        {name:"Agility", value: "84"},
        {name:"Balance", value: "82"},
        {name:"Reactions", value: "84"},
        {name:"Ball Control", value: "84"},
        {name:"Dribbling", value: "90"},
        {name:"Composure", value: "75"}
    ];

    const defendingStats = [
        {name:"Interceptions", value: "50"},
        {name:"Heading Accuracy", value: "90"},
        {name:"Defensive Awareness", value: "60"},
        {name:"Standing Tackle", value: "50"},
        {name:"Sliding Tackle", value: "50"}
    ];

    const physicalStats = [
        {name:"Jumping", value: "90"},
        {name:"Stamina", value: "87"},
        {name:"Strength", value: "83"},
        {name:"Aggression", value: "87"}
    ];

    const goalkeepingStats = [
        {name:"Diving", value: "10"},
        {name:"Handling", value: "10"},
        {name:"Kicking", value: "10"},
        {name:"Reflexes", value: "10"},
        // {name:"Speed", value: "43"},
        {name:"Positioning", value: "10"}    
    ];

    return (
        <div style={{paddingBottom: "50px"}}>
            <h1>Results</h1>
            <hr style={{marginBottom: "50px"}} />
            <Table heading="Pace" stats={paceStats} />
            <Table heading="Shooting" stats={shootingStats} />
            <Table heading="Passing" stats={passingStats} />
            <Table heading="Dribbling" stats={dribblingStats} />
            <Table heading="Defending" stats={defendingStats} />
            <Table heading="Physical" stats={physicalStats} />
            <Table heading="Goalkeeping" stats={goalkeepingStats} />
        </div>
    );
};

export default FinalStats;