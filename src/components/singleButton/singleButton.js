import "../../App.css";


import {Button} from 'react-bootstrap';



// first thing we did is to create an actual button component which we now ahve access to from our app.js since we exported here and imported into the app.js

const SingleButton = (props) => {

    //handClick is a function that takes the props being passed in
    //so takes the value for that prop
    const handleClick = () => props.onClick(props.value)

    return (
        <Button variant={props.variation} className={props.className} onClick={handleClick}>{props.value}</Button>
    )
}

export default SingleButton;