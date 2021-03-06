import React, { Component } from "react";
import data from "./PhoneCallingCost.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Customer Total Cost</h1>
        </header>
        <table>
          <tr>
            <th>Mobile No.</th>
            <th>Total Cost (baht)</th>
          </tr>
          {data.map(function(phone) {
            return (
              <tr className="list">
                <td className="Table-mobileNo">{phone.mobileNo}</td>
                <td className="Table-cost">{phone.cost.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
