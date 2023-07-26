import React from "react";
import Card from "./Card";

function Travel_types(){
    return(
        <>
            <div className="Travel-main">
                <h2 className="text-center">Travel Lists</h2>
                <h2 className="text-center">Customize Travel</h2>
                <div className="Travel">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Travel_types;