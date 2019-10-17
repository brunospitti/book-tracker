import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch('/api/books')
      .then(res => res.json())
      .then(json => {
        this.setState({
          books: json
        });
      });
  }

  render() {
    return (
      <>
        <p>books:</p>
        {this.state.books.map(book => <p>{book.work_id}</p>)}
      </>
    );
  }
}

export default Home;
