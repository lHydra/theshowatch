import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

class Movie extends React.Component {
  releaseStatus(status) {
    switch(status) {
      case "released":
        return "Вышел";
      case "expected":
        return <Moment format="YYYY">{this.props.movie.release_date}</Moment>;
      case "coming_out":
        return <Moment format="DD MMM YY">{this.props.movie.release_date}</Moment>;
      default:
        return "Нет информации";
    }
  }

  render() {
    const { cover, title, seasonsCount, status, permalink } = this.props.movie;

    return (
      <div className="movie">
        <div className="movie--container" style={{ background: `url(${cover.main.url})` }}>
          <a href={permalink} className="movie--overlay">
            <div className="movie--title"> {title} </div>
            <div className="movie--season"> {seasonsCount} </div>
            <div className="movie--release-date">
              {this.releaseStatus(status)}
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Movie;
