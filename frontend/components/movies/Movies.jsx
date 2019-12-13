import React from "react";
import PropTypes from "prop-types";
import Page from "../page/Page";
import Movie from "../movie/Movie"
import './movies';

class Movies extends React.Component {
  render() {
    const movies = this.props.movies || [];

    return (
      <Page>
        <div className="movies">
          {movies.map((movie, index) => <Movie movie={movie} key={index} />)}
        </div>
      </Page>
    );
  }
}

export default Movies;
