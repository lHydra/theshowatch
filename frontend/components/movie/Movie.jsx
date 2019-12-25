import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

class Movie extends React.Component {
  render() {
    const {
      cover,
      title,
      seasonsCount,
      status,
      permalink,
      releaseDate
    } = this.props.movie;

    return (
      <div className="movie">
        <div
          className="movie--container"
          style={{ background: `url(${cover.main.url})` }}
        >
          <a href={permalink} className="movie--overlay">
            <div className="movie--title"> {title} </div>
            <div className="movie--season"> {seasonsCount} </div>
            <div className="movie--release-date">
              <MovieStatus status={status} release_date={releaseDate} />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Movie;

export function MovieStatus(props) {
  switch (props.status) {
    case "released":
      return "Вышел";
    case "expected":
      return <Moment format="YYYY">{props.releaseDate}</Moment>;
    case "coming_out":
      return <Moment format="DD MMM YY">{props.releaseDate}</Moment>;
    default:
      return "Нет информации";
  }
}
