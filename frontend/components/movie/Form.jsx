import React from "react";
import Page from "../page/Page";
import TextFieldGroup from "../form/TextFieldGroup";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: { title: props.movie.title, description: props.movie.description }, errors: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.fileInput = React.createRef();
  }

  handleTitleChange(e) {
    this.setState({ movie: { title: e.target.value } });
  }

  handleDescriptionChange(e) {
    this.setState({ movie: { description: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    let movieData = new FormData(e.target);

    fetch(`/movies/${this.props.movie.id}`, {
      method: "PATCH",
      headers: {
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content,
      },
      body: movieData
    })
      .then(response => {
        if (response.redirected) {
          window.location.href = response.url;
        } else {
          return response.json();
        }
      })
      .then(result => {
        this.setState({ errors: result });
      });
  }

  render() {
    return (
      <Page>
        <form id="movie-form" onSubmit={this.handleSubmit}>
          <TextFieldGroup
            tag="input"
            id="movie_title"
            onChange={this.handleTitleChange}
            value={this.state.movie.title}
            field="movie[title]"
            type="text"
            error={this.state.errors.title}
            label="Название"
          />

          <TextFieldGroup
            tag="textarea"
            id="movie_description"
            onChange={this.handleDescriptionChange}
            value={this.state.movie.description}
            field="movie[description]"
            type="text"
            error={this.state.errors.description}
            label="Описание"
          />

          <TextFieldGroup
            tag="input"
            id="movie_cover"
            field="movie[cover]"
            type="file"
            label="Обложка"
            ref={this.fileInput}
          />

          <button type="submit" className="btn btn--success">Сохранить</button>
        </form>
      </Page>
    );
  }
}

export default Form;
