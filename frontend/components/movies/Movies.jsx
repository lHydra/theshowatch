import React from "react";
import PropTypes from "prop-types";
import Page from "../page/Page";
import Movie from "../movie/Movie";
import "./movies";

class Movies extends React.Component {
  render() {
    const movies = this.props.movies || [];

    return (
      <Page>
        <div className="movies">
          {movies.map(movie => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </Page>
    );
  }
}

export default Movies;
