import React from "react";

const Player = (props) => {
    return (
        <>
            <h3>Current Episode: {props.currentEpisode}</h3>
            <button onClick={props.triggerNextEpisode}>Next Episode</button>
        </>
    )
}

export default Player