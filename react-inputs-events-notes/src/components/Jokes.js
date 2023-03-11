

const Jokes = (props) => {
    console.log('props:', props)
    console.log('props:', props.jollyAnswer)
    return (
        <>
            {props.name && <h2>{props.name}, click the box for some jokes</h2>}
            <div onClick={props.differentJoke} style={{border: "2px solid green", width: "150px", height: "150px", position: "relative", left: "50px", top: "40px"}}>
                {props.jolly}
            </div>
            {/* <button onClick={() => props.jollyAnswer}>Answer</button> */}
        </>
    )
}

export default Jokes