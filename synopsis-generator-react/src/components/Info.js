import './Info.css';

import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="content">
        <p>Struggling to find the book idea you want? Ever wonder what would happen if two of your favourite classics collided? Book x Book is a book synopsis generator powered by OpenAI's AI, using public domain works found on Project Gutenburg. Simply select two books from the dropdown menu, and see the machine to generate a synopsis about a mish-mash of the two!</p>
        <p>Currently available books to choose are Anna Karenina by Leo Tolstoy, The Divine Comedy by Dante Alighieri, Dream of the Red Chamber by Cao Xueqin, Frankenstein; Or, The Modern Prometheus by Mary Shelley.</p>
    </div>
    );
  }
}

export default Info;