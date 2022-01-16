import './Info.css';

import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="content">
        <p>Struggling to find the book idea you want? Ever wonder what would happen if two of your favourite classics collided? Book x Book is a book synopsis generator powered by OpenAI's GPT-3, using public domain works found on Project Gutenburg. Simply select two books from the dropdown menu, and see the machine to generate a synopsis about a mish-mash of the two!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan nunc sed diam porttitor, sed commodo nisl condimentum. Suspendisse posuere, nisi quis efficitur aliquam, turpis nulla pulvinar neque, nec malesuada massa nisi eleifend purus. Praesent feugiat enim vel mollis eleifend. Mauris dolor sem, mollis et dapibus eu, finibus a massa. Cras vestibulum nisl ut blandit posuere. Pellentesque non ex nec felis accumsan dictum eu id tellus. Integer hendrerit ante non tincidunt rhoncus. Nam congue, magna pulvinar vulputate gravida, augue velit cursus metus, porttitor ullamcorper felis dui vel purus. Fusce et tincidunt dolor, vel lobortis dui. Aliquam aliquet faucibus libero eget tincidunt. Cras mauris dolor, volutpat at eleifend eget, pulvinar et ante. In ac elit ac metus consequat vestibulum ac vel est. Sed ultricies vel mi quis egestas.</p>
        <p>Sed ultrices odio non lorem pulvinar mollis. Pellentesque sem nulla, vulputate sit amet dui a, rhoncus vehicula nibh. Mauris vestibulum lorem eget lectus viverra, et rhoncus sapien lobortis. Vestibulum ultrices orci sit amet quam hendrerit, quis pulvinar nibh sollicitudin. Donec quis magna elementum, molestie lacus sit amet, lobortis odio. Morbi pharetra vel quam eu blandit. Nullam nunc metus, laoreet ut orci eu, lobortis eleifend enim. Duis commodo ligula id pretium imperdiet. Ut feugiat magna nec mauris pellentesque, nec finibus est dictum. Phasellus tempus turpis a enim ornare sodales. Nullam finibus auctor dolor sed congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam varius nisi at neque maximus, a cursus nulla viverra. Vestibulum consectetur libero non nulla egestas, et ullamcorper justo sodales.</p>
    </div>
    );
  }
}

export default Info;