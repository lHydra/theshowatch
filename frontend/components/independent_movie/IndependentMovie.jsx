// frontend/components/independent_movie/IndependentMovie.js

import "./independent_movie";
import React from "react";
import Page from "../page/Page";

class IndependentMovie extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <Page>
        <div className="independent-movie flex-container">
          <div className="left-side">
            <img src={movie.cover.main.url} className="independent-movie--cover" />
          </div>

          <div className="right-side">
            <h1> {movie.title} </h1>
            {
              Object.values(movie).map(function(prop, i) {
                if (typeof(prop) != "object") {
                  return <div className="independent-movie--field" key={i}> {prop} </div>
                }
              })
            }
          </div>
        </div>
      </Page>
    )
  }
}

export default IndependentMovie;
