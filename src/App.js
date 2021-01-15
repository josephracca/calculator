import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import SingleButton from "./components/singleButton/singleButton";
import CalcButtonGroup from "./components/calcButtons/calcButtons";

function App() {
  return (
    <div className="App">
      <CalcButtonGroup />
      {/* <Button /> */}
    </div>
  );
}

export default App;
