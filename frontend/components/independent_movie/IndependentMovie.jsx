import "./independent_movie";
import React from "react";
import Page from "../page/Page";
import I18n from "i18n-js";

class IndependentMovie extends React.Component {
  render() {
    const fields = this.props.fields;
    const cover = this.props.cover.card.url;
    const title = this.props.title;
    return (
      <Page>
        <div className="independent-movie flex-container">
          <div className="left-side">
            {cover !== null &&
              <img
                src={cover}
                className="independent-movie--cover"
              />
            }
          </div>

          <div className="right-side">
            <h1 className="independent-movie--title"> {title} </h1>
            {Object.entries(fields).map(([key, value]) => {
              return (
                <div className="independent-movie--field" key={key}>
                  <label className="float-label"> {I18n.t(`activerecord.attributes.movie.${key}`)} </label>
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
