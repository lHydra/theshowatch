import "./independent_movie";
import React from "react";
import I18n from "i18n-js";
import Moment from "react-moment";
import Page from "../page/Page";

class IndependentMovie extends React.Component {
  render() {
    const { fields, title } = this.props;
    const cover = this.props.cover.card.url;
    return (
      <Page>
        <div className="independent-movie flex-container">
          <div className="left-side">
            {cover !== null && (
              <img src={cover} className="independent-movie--cover" />
            )}
          </div>

          <div className="right-side">
            <h1 className="independent-movie--title"> {title} </h1>
            {Object.entries(fields).map(([key, value]) => (
              <div className="independent-movie--field" key={key}>
                <MovieField field={key} value={value} />
              </div>
            ))}
          </div>
        </div>
      </Page>
    );
  }
}

export default IndependentMovie;

export function MovieField(props) {
  const value = (function(field) {
    switch (field) {
      case "kind":
        return I18n.t(`activerecord.attributes.movie.kinds.${props.value}`);
      case "release_date":
      case "premiere_date":
        return <Moment format="DD MMM YY">{props.value}</Moment>;
      default:
        return props.value;
    }
  })(props.field);

  return (
    <React.Fragment>
      <label className="float-label">
        {I18n.t(`activerecord.attributes.movie.${props.field}`)}
      </label>
      <span>{value}</span>
    </React.Fragment>
  );
}
