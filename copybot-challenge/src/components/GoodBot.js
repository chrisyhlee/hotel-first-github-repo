

const GoodBot = (props) => {
    // console.log('props: ', props);
    return (
        <>
        {props.name && <p>You are saying, '{props.name}'. Is that correct?</p>}
        </>
    )
}

export default GoodBot