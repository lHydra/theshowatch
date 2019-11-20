// frontend/components/independent_movie/IndependentMovie.js

import "./independent_movie.css";
import React from "react";
import Page from "../page/Page";

class IndependentMovie extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <Page>
        <h1> {movie.title} </h1>
      </Page>
    )
  }
}

export default IndependentMovie;
