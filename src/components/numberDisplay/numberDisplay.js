//pass in props to this function

const NumberDisplay = (props) => {

    const displayScreen = {
        backgroundColor: "gray",
        color: "white"
    }

    return(
        <>
        {/* <div className="mt-5" style={displayScreen}>{props.message}</div> */}
        <div className="" style={displayScreen}>{props.message}</div>
        </>
    )
}

export default NumberDisplay;