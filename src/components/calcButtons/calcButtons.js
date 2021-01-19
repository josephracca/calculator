// now import all the{"info"}mation that you need to build the calculate display

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleButton from "../singleButton/singleButton";
import NumberDisplay from "../numberDisplay/numberDisplay";

//now we have define a class, this will hold all the pressable buttons...

// we need to extend the parent class to this child class
class CalcButtonGroup extends React.Component {
  // always starts with a constructor
  constructor(props) {
    super(props);
    this.state = {
      // states for this class
      //first number being captured, we will also use this as the first number in the next operation if that's going to be used
      num1: "",
      //num2 will always be the second input, after the first or the result from previous calculation
      num2: "",
      //result is the result of the calculation
      result: null,
      //the operation selected for the operation
      operation: "",
      //checks to see if the number is finished, needs to be called when the operations are clicked, committing the string to memory
      numSet: false,
      //showResults: boolean that shows result, would be set to false if everything has been cleared, or if the next number is being typed in...
      // showResult: false,
      display: "",
    };
  }

  //================FUNCTIONS/METHODS================//
  SetNum = (newValue) => {
    //   this function takes the value being passed through and logs it into a string... so each instance of the single button has a value that gets passed in as a parameter
    // so the bool will remain false since it's not yet set, the operation symbols will set it to true
    if (!this.state.numSet) {
      this.setState({ num1: (this.state.num1 += newValue) });
      // this.setState({ display: (this.state.display += newValue) });
    } else {
      this.setState({ num2: (this.state.num2 += newValue) });
      console.log(this.state.num2);
    }

    //
  };

  SetOperation = (newOperation) => {
    // this function sets the operation to be used int he calculation
    //first it will set the number completion to true
    this.setState({ numSet: true });
    //second it will set the oepration type to be used in the switch case...
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
  };

  // SetNewNum1 = (resultPrev) => {
  //     //this needs to happen if the result is present on screen
  //     // resultPrev is the number that's passed in...
  // if (this.state.showResult) {
  //     console.log(resultPrev);
  //     this.setState({num1: resultPrev})
  // } else {
  //     console.log('nothing to display here');
  // }

  // }

  ClearAll = () => {
    console.log("All Clear");
    this.setState({
      num1: "",
      num2: "",
      result: null,
      operation: "",
      numSet: false,
      // showResult: false,
    });
  };

  QuickMath = () => {
    // console.log('test');
    // this.setState({showResult: true});

    //switch to test the operator (copied and pasted)
    switch (this.state.operation) {
      case "+":
        // console.log("test");
        this.setState({
          result: parseInt(this.state.num1) + parseInt(this.state.num2),
        });
        break;
      case "-":
        this.setState({
          result: parseInt(this.state.num1) - parseInt(this.state.num2),
        });
        break;
      case "÷":
        this.setState({
          result: parseInt(this.state.num1) / parseInt(this.state.num2),
        });
        break;
      case "×":
        this.setState({
          result: parseInt(this.state.num1) * parseInt(this.state.num2),
        });
        break;
      case "%":
        this.setState({
          result: parseInt(this.state.num1) % parseInt(this.state.num2),
        });
        break;
      default:
        break;
    }
  };
  DisplayValue() {}

  //================TO RENDER ON DOM================//
  render() {
    return (
      <Container>
        {/* <NumberDisplay message="Hello there..." /> */}

        {/* //need to toggle the displays or have the message be replaced once the operation is set...  */}

        <Row>
          <Col className="d-flex justify-content-center">
            <NumberDisplay message={this.state.display} />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            <NumberDisplay message={this.state.num1} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <NumberDisplay message={this.state.operation} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <NumberDisplay message={this.state.num2} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <NumberDisplay message={this.state.result} />
          </Col>
        </Row>

        <Row>
          <Col>
            <SingleButton
              variation={"danger"}
              onClick={this.ClearAll}
              value={"c"}
            />
            <SingleButton
              variation={"info"}
              onClick={this.SetOperation}
              value={"±"}
            />
            <SingleButton
              variation={"info"}
              onClick={this.SetOperation}
              value={"%"}
            />
            <SingleButton
              variation={"info"}
              onClick={this.SetOperation}
              value={"÷"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* why do the number values get wrapped in curly braces? */}
            <SingleButton variation={"dark"} onClick={this.SetNum} value={7} />
            <SingleButton variation={"dark"} onClick={this.SetNum} value={8} />
            <SingleButton variation={"dark"} onClick={this.SetNum} value={9} />
            <SingleButton
              variation={"info"}
              onClick={this.SetOperation}
              value={"×"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleButton variation={"dark"} onClick={this.SetNum} value={4} />
            <SingleButton variation={"dark"} onClick={this.SetNum} value={5} />
            <SingleButton variation={"dark"} onClick={this.SetNum} value={6} />
            <SingleButton
              variation={"info"}
              onClick={this.SetOperation}
              value={"-"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleButton variation={"dark"} onClick={this.SetNum} value={1} />
            <SingleButton variation={"dark"} onClick={this.SetNum} value={2} />
            <SingleButton variation={"dark"} onClick={this.SetNum} value={3} />
            <SingleButton
              variation={"info"}
              onClick={this.SetOperation}
              value={"+"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleButton variation={"light"} onClick={this.SetNum} value={0} />
            <SingleButton variation={"dark"} onClick={this.SetNum} value={0} />
            <SingleButton
              variation={"dark"}
              onClick={this.SetNum}
              value={"."}
            />
            <SingleButton onClick={this.QuickMath} value={"="} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CalcButtonGroup;
