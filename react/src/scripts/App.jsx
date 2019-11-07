
import React, { Component } from "react";
import Nav from "./Nav"
// import Upper from "./Upper";
// import Employee from "./login/Employee";
import Test from "./Test/Test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        {/* <Upper /> */}
        {/* <Employee /> */}
        <Test />
      </div>
    );
  }
}

export default App;

