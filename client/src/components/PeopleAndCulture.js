import React, { Component } from "react";

export default class PeopleAndCulture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleSubmit = () => {
    // pass data back up to parent using this.props.addToFavorites();
    this.props.addToFavorites({
      content: this.state.content,
    });
  };

  render() {
    return (
      <div>
        <h1>People and culture</h1>
        <p>Some text</p>
      </div>
    );
  }
}
