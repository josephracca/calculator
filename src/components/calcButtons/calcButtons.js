// now import all the{"info"}mation that you need to build the calculate display

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleButton from "../singleButton/singleButton";
import NumberDisplay from "../numberDisplay/numberDisplay";
import "../../App.css";

//now we have to define a class, this will hold all the pressable buttons...and we eventually added the display to it as well.
// we need to extend the parent class to this child class
class CalcButtonGroup extends React.Component {
  // always starts with a constructor
  constructor(props) {
    // always honor the relationship created with extends by using super
    super(props);
    // states for this class
    this.state = {
      //first number being captured, we will also use this as the first number in the next operation if that's going to be used
      num1: "",
      //num2 will always be the second input, after the first or the result from previous calculation
      num2: "",
      //result is the result of the calculation always starts as empty
      result: null,
      //the operation selected for the operation, will be a string so we can later use it in a switch statement
      operation: "",
      //checks to see if the number is finished, needs to be called when the operations are clicked, committing the strings to memory
      numSet: false,
    };
  }

  //================FUNCTIONS/METHODS================//
  SetNum = (newValue) => {
    //   this function takes the value being passed through and logs it into a string... so each instance of the single button has a value that gets passed in as a parameter
    // so the bool will remain false since it's not yet set, the operation symbols will set it to true
    if (!this.state.numSet) {
      this.setState({ num1: (this.state.num1 += newValue) });
    } else {
      this.setState({ num2: (this.state.num2 += newValue) });
    }
  };

  ClearAll = () => {
    this.setState({
      num1: "",
      num2: "",
      result: null,
      operation: "",
      numSet: false,
      // showResult: false,
    });
  };

  SetOperation = (newOperation) => {
    // takes in the string of the operation as it's argument
    if (this.state.operation === "") {
      // this function sets the operation to be used in the calculation
      // first it will set the number completion to true
      this.setState({ numSet: true });
      //second it will set the operation type to be used in the switch case...
      this.setState({ operation: newOperation });
      //toggle numSet
      this.state.numSet === true &&
        this.setState({
          num1: this.state.result,
          num2: "",
          result: null,
          operation: newOperation,
          numSet: true,
        });
    } else {
      // we need it to evaluate since they're entering new numbers, so this conditional will check and run the eval
      this.QuickMath();
      this.setState({ operation: newOperation });
    }
  };

  NegativeSwitch = () => {
    // function will evaluate the current string and multiply by it by -1
    this.setState({
      num1: parseFloat(this.state.num1) * parseFloat("-1"),
      result: parseFloat(this.state.num1) * parseFloat("-1"),
      num2: "",
      operation: "",
    });
  };

  QuickMath = () => {
    //switch to test the operator (copied and pasted), modified with parsefloat for decimals, also modified it to set the result if it's being used later...may ahve to check if this actually does anything...
    switch (this.state.operation) {
      case "+":
        this.setState({
          num1: parseFloat(this.state.num1) + parseFloat(this.state.num2),
          result: parseFloat(this.state.num1) + parseFloat(this.state.num2),
          num2: "",
          operation: "",
        });
        break;
      case "-":
        this.setState({
          num1: parseFloat(this.state.num1) - parseFloat(this.state.num2),
          result: parseFloat(this.state.num1) - parseFloat(this.state.num2),
          num2: "",
          operation: "",
        });
        break;
      case "÷":
        this.setState({
          num1: parseFloat(this.state.num1) / parseFloat(this.state.num2),
          result: parseFloat(this.state.num1) / parseFloat(this.state.num2),
          num2: "",
          operation: "",
        });
        break;
      case "×":
        this.setState({
          num1: parseFloat(this.state.num1) * parseFloat(this.state.num2),
          result: parseFloat(this.state.num1) * parseFloat(this.state.num2),
          num2: "",
          operation: "",
        });
        break;
      case "%":
        this.setState({
          num1: parseFloat(this.state.num1) % parseFloat(this.state.num2),
          result: parseFloat(this.state.num1) % parseFloat(this.state.num2),
          num2: "",
          operation: "",
        });
        break;
      default:
        break;
    }
    this.setState({ operation: "" });
  };
  DisplayValue() {
    if (!this.state.num1) {
      return "0";
    } else if (this.state.operation !== "") {
      return this.state.num2;
    }
  }

  //IMPROVEMENTS:
  // *** in order to get the calculations working, setNum has to clear the information if the operation has not been set...
  //in order to chain operations, the operation buttons have to work like the equal buttons, so it will automatically evaluate what has come before it...

  //================TO RENDER ON DOM================//
  render() {
    return (
      <Container className="limitWidth">
        <Row className="setHeight">
          <Col className="d-flex justify-content-center">
            <NumberDisplay
              message={
                !this.state.operation
                  ? this.state.num1
                  : !this.state.num2
                  ? this.state.num1
                  : this.state.num2
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <SingleButton
              className="m-2 equalWidth"
              variation={"danger"}
              onClick={this.ClearAll}
              value={"c"}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"warning"}
              onClick={this.NegativeSwitch}
              value={"±"}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"warning"}
              onClick={this.SetOperation}
              value={"%"}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"info"}
              onClick={this.SetOperation}
              value={"÷"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* why do the number values get wrapped in curly braces? */}
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={7}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={8}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={9}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"info"}
              onClick={this.SetOperation}
              value={"×"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={4}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={5}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={6}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"info"}
              onClick={this.SetOperation}
              value={"-"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={1}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={2}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={3}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"info"}
              onClick={this.SetOperation}
              value={"+"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleButton
              className="m-2 double"
              variation={"dark"}
              onClick={this.SetNum}
              value={0}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"dark"}
              onClick={this.SetNum}
              value={"."}
            />
            <SingleButton
              className="m-2 equalWidth"
              variation={"success"}
              onClick={this.QuickMath}
              value={"="}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CalcButtonGroup;
