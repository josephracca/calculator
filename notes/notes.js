// // now import all the{"info"}mation that you need to build the calculate display

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import SingleButton from "../singleButton/singleButton";
// import NumberDisplay from "../numberDisplay/numberDisplay";
// import "../../App.css";

// //now we have define a class, this will hold all the pressable buttons...

// // we need to extend the parent class to this child class
// class CalcButtonGroup extends React.Component {
//   // always starts with a constructor
//   constructor(props) {
//     super(props);
//     this.state = {
//       // states for this class
//       //first number being captured, we will also use this as the first number in the next operation if that's going to be used
//       num1: "",
//       //num2 will always be the second input, after the first or the result from previous calculation
//       num2: "",
//       //result is the result of the calculation
//       result: null,
//       //the operation selected for the operation
//       operation: "",
//       //checks to see if the number is finished, needs to be called when the operations are clicked, committing the string to memory
//       numSet: false,
//       //showResults: boolean that shows result, would be set to false if everything has been cleared, or if the next number is being typed in...
//       // showResult: false,
//       display: "",
//     };
//   }

//   //================FUNCTIONS/METHODS================//
//   SetNum = (newValue) => {
//     console.log(this.state.operation);

//     //   this function takes the value being passed through and logs it into a string... so each instance of the single button has a value that gets passed in as a parameter
//     // so the bool will remain false since it's not yet set, the operation symbols will set it to true

// // if (this.state.operation === ""){
  
// // }

// // if num1 is filled... and the operation is empty, if result is not empty, clear it and num1

// // if (this.state.num1 !== "" && this.state.operation === ""){
// //   this.setState({num1: "", result: null, numSet: false});

// //   // if (!this.state.numSet) {
// //   //   this.setState({ num1: (this.state.num1 += newValue) });
// //   //   // this.setState({ display: (this.state.display += newValue) });
// //   // } else {
// //   //   this.setState({ num2: (this.state.num2 += newValue) });
// //   //   console.log(this.state.num2);
// //   // }
// //   } 

//     if (!this.state.numSet) {
//       this.setState({ num1: (this.state.num1 += newValue) });
//       // this.setState({ display: (this.state.display += newValue) });
//     } else {
//       this.setState({ num2: (this.state.num2 += newValue) });
//       console.log(this.state.num2);
//     }

//     //
//   };

//   SetOperation = (newOperation) => {

// if (this.state.operation === ""){
//     // this function sets the operation to be used int he calculation
//     //first it will set the number completion to true
//     this.setState({ numSet: true });
//     //second it will set the oepration type to be used in the switch case...
//     this.setState({ operation: newOperation });

//     //toggle numSet
//     this.state.numSet === true &&
//       this.setState({
//         num1: this.state.result,
//         num2: "",
//         result: null,
//         operation: newOperation,
//         numSet: true,
//       });
// } else {
//   this.QuickMath();
// }




//   };

//   // SetNewNum1 = (resultPrev) => {
//   //     //this needs to happen if the result is present on screen
//   //     // resultPrev is the number that's passed in...
//   // if (this.state.showResult) {
//   //     console.log(resultPrev);
//   //     this.setState({num1: resultPrev})
//   // } else {
//   //     console.log('nothing to display here');
//   // }

//   // }

//   ClearAll = () => {
//     console.log("All Clear");
//     this.setState({
//       num1: "",
//       num2: "",
//       result: null,
//       operation: "",
//       numSet: false,
//       // showResult: false,
//     });
//   };

//   NegativeSwitch = () => {
//     this.setState({
//       // num2: "-1",
//       num1: parseFloat(this.state.num1) * parseFloat("-1"),
//       result: parseFloat(this.state.num1) * parseFloat("-1"),
//       num2: "",
//       operation: "",
//     });
//   };

//   QuickMath = () => {
//     // console.log('test');
//     // this.setState({showResult: true});

//     //switch to test the operator (copied and pasted)
//     switch (this.state.operation) {
//       case "+":
            

//         this.setState({
//           num1: parseFloat(this.state.num1) + parseFloat(this.state.num2),
//           result: parseFloat(this.state.num1) + parseFloat(this.state.num2),
//           num2: "",
//           operation: ""
//         });
//         console.log(this.state.num1);
//         break;
//       case "-":
            

//         this.setState({
//           num1: parseFloat(this.state.num1) - parseFloat(this.state.num2),
//           result: parseFloat(this.state.num1) - parseFloat(this.state.num2),
//           num2: "",
//           operation: ""
//         });
//         console.log(this.state.num1);
//         break;
//       case "÷":
            

//         this.setState({
//           num1: parseFloat(this.state.num1) / parseFloat(this.state.num2),
//           result: parseFloat(this.state.num1) / parseFloat(this.state.num2),
//           num2: "",
//           operation: ""
//         });
//         console.log(this.state.num1);
//         break;
//       case "×":
            

//         this.setState({
//           num1: parseFloat(this.state.num1) * parseFloat(this.state.num2),
//           result: parseFloat(this.state.num1) * parseFloat(this.state.num2),
//           num2: "",
//           operation: ""
//         });
//         console.log(this.state.num1);
//         break;
//       case "%":
            

//         this.setState({
//           num1: parseFloat(this.state.num1) % parseFloat(this.state.num2),
//           result: parseFloat(this.state.num1) % parseFloat(this.state.num2),
//           num2: "",
//           operation: ""
//         });
//         console.log(this.state.num1);
//         break;
//       default:
//         break;
//     }
//     this.setState({ operation: ""});
//   };
//   DisplayValue() {
//     if (!this.state.num1) {
//       return "0"
//     } else if (this.state.operation !== "") {
//       return this.state.num2;
//     }
//   }

//   //IMPROVEMENTS:
//   // *** in order to get the calculations working, setNum has to clear the information if the operation has not been set...
//   //in order to chain operations, the operation buttons have to work like the equal buttons, so it will automatically evaluate what has come before it...

//   //================TO RENDER ON DOM================//
//   render() {
//     return (
//       <Container className="limitWidth">
//         {/* <NumberDisplay message="Hello there..." /> */}

//         {/* //need to toggle the displays or have the message be replaced once the operation is set...  */}

//         {/* <Row>
//           <Col className="d-flex justify-content-center">
//             <NumberDisplay message={this.state.display} />
//           </Col>
//         </Row> */}

//         <Row>
//           <Col className="d-flex justify-content-center">
//             <NumberDisplay
//               message={
//                 !this.state.operation ? this.state.num1  : !this.state.num2 ? this.state.num1 : this.state.num2
//                 // this.DisplayValue
//               }
//             />
//           </Col>
//         </Row>
//         {/* <Row>
//           <Col className="d-flex justify-content-center">
//             <NumberDisplay message={this.state.operation} />
//           </Col>
//         </Row> */}
//         {/* <Row>
//           <Col className="d-flex justify-content-center">
//             <NumberDisplay message={this.state.num2} />
//           </Col>
//         </Row> */}
//         {/* <Row>
//           <Col className="d-flex justify-content-center">
//             <NumberDisplay message={this.state.result} />
//           </Col>
//         </Row> */}

//         <Row>
//           <Col className="mt-5">
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"danger"}
//               onClick={this.ClearAll}
//               value={"c"}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"warning"}
//               onClick={this.NegativeSwitch}
//               value={"±"}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"warning"}
//               onClick={this.SetOperation}
//               value={"%"}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"info"}
//               onClick={this.SetOperation}
//               value={"÷"}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             {/* why do the number values get wrapped in curly braces? */}
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={7}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={8}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={9}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"info"}
//               onClick={this.SetOperation}
//               value={"×"}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={4}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={5}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={6}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"info"}
//               onClick={this.SetOperation}
//               value={"-"}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={1}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={2}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={3}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"info"}
//               onClick={this.SetOperation}
//               value={"+"}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             {/* <SingleButton className="m-2 equalWidth" variation={"light"} onClick={this.SetNum} value={0} /> */}
//             <SingleButton
//               className="m-2 double"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={0}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"dark"}
//               onClick={this.SetNum}
//               value={"."}
//             />
//             <SingleButton
//               className="m-2 equalWidth"
//               variation={"success"}
//               onClick={this.QuickMath}
//               value={"="}
//             />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default CalcButtonGroup;
