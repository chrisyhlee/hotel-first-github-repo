
const NotGoofBot = (props) => {
    return (
        <>
        {props.name && <p>Can you please say '{props.name}' again?</p>}
        </>
    )
}

export default NotGoofBot