// frontend/components/independent_movie/IndependentMovie.js

import "./independent_movie";
import React from "react";
import Page from "../page/Page";

class IndependentMovie extends React.Component {
  render() {
    const fields = this.props.fields;
    return (
      <Page>
        <div className="independent-movie flex-container">
          <div className="left-side">
            <img
              src={this.props.cover.main.url}
              className="independent-movie--cover"
            />
          </div>

          <div className="right-side">
            <h1 className="independent-movie--title"> {this.props.title} </h1>
            {Object.entries(fields).map(([key, value]) => {
              return (
                <div className="independent-movie--field" key={key}>
                  <label className="float-label"> {key} </label>
                  <span> {value} </span>
                </div>
              );
            })}
          </div>
        </div>
      </Page>
    );
  }
}

export default IndependentMovie;
