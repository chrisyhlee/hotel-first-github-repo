import React from "react";

const EpisodeList = (props) => {
    console.log(props)
    return (
        <>
            <div className="card">{props.title}</div>
        </>
    )
}

export default EpisodeList