
const GoofBot = (props) => {
    return (
        <>
        {props.name && <p>Please don't ever say '{props.name}' again...</p>}
        </>
    )
}

export default GoofBot