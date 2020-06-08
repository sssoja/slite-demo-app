import React, { Component } from "react";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        Add your favorites
      </div>
    );
  }
}

export default Favorites;
