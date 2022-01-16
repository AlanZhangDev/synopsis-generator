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
                <select className="book-1-selector" required>
                    <option value="Anna-Karenina">Anna Karenina</option>
                    <option value="Divine-Comedy">Divine Comedy</option>
                    <option value="Dream-Red-Chamber">Dream of the Red Chamber</option>
                    <option value="Frankenstein">Frankenstein; Or, The Modern Prometheus</option>
                    <option value="Metamorphosis">The Metamorphosis</option>
                    <option value="Les-Miserables">Les Misérables</option>
                    <option value="Modest-Proposal">A Modest Proposal</option>
                    <option value="Odyssey">Odyssey</option>
                    <option value="Pride-Prejudice">Pride and Prejudice</option>
                    <option value="Wuthering-Heights">Wuthering Heights</option>
                </select>
                {/*<input className="book-1-selector" type="text" name="book-1-selector" list=book-selector placeholder="E.g. Wuthering Heights" required/>*/}
                <h4 className="book-label">Book Two:</h4>
                <select className="book-1-selector" required>
                    <option value="Anna-Karenina">Anna Karenina</option>
                    <option value="Divine-Comedy">Divine Comedy</option>
                    <option value="Dream-Red-Chamber">Dream of the Red Chamber</option>
                    <option value="Frankenstein">Frankenstein; Or, The Modern Prometheus</option>
                    <option value="Metamorphosis">The Metamorphosis</option>
                    <option value="Les-Miserables">Les Misérables</option>
                    <option value="Modest-Proposal">A Modest Proposal</option>
                    <option value="Odyssey">Odyssey</option>
                    <option value="Pride-Prejudice">Pride and Prejudice</option>
                    <option value="Wuthering-Heights">Wuthering Heights</option>
                </select>
                {/*<input className="book-1-selector" type="text" name="book-2-selector" list=book-selector placeholder="E.g. Anna Karenina" required/>*/}
            </form>
        </div>
    </div>
    );
  }
}

export default Form