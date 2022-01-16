import './Form.css';

import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="book-selector-wrapper">
        <h3>Try It Yourself!</h3>
        <div className="book-selector">
            <form>
                <h4 className="book-label">Book One:</h4>
                <select className="book-1-selector" required id="book-1">
                    <option value="Anna-Karenina">Anna Karenina</option>
                    <option value="Divine-Comedy">Divine Comedy</option>
                    <option value="Dream-Red-Chamber">Dream of the Red Chamber</option>
                    <option value="Frankenstein">Frankenstein; Or, The Modern Prometheus</option>
                </select>
                {/*<input className="book-1-selector" type="text" name="book-1-selector" list=book-selector placeholder="E.g. Wuthering Heights" required/>*/}
                <h4 className="book-label">Book Two:</h4>
                <select className="book-1-selector" required id="book-2">
                    <option value="Anna-Karenina">Anna Karenina</option>
                    <option value="Divine-Comedy">Divine Comedy</option>
                    <option value="Dream-Red-Chamber">Dream of the Red Chamber</option>
                    <option value="Frankenstein">Frankenstein; Or, The Modern Prometheus</option>
                </select>
                {/*<input className="book-1-selector" type="text" name="book-2-selector" list=book-selector placeholder="E.g. Anna Karenina" required/>*/}
            </form>

            <center>
            <button id="enter" >
              Enter
            </button>
            </center>

            <p id="output">

            </p>
        </div>
    </div>
    );
  }
}

export default Form