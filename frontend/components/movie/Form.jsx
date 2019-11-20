import React from "react";
import Page from "../page/Page";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: { title: props.movie.title, description: props.movie.description } };
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
        console.log(result);
      });
  }

  render() {
    return(
      <Page>
        <form id="movie-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="movie_title">Название</label>
            <input
              id="movie_title"
              type="text"
              name="movie[title]"
              value={this.state.movie.title}
              onChange={this.handleTitleChange}
            />
          </div>

          <div>
            <label htmlFor="movie_description">Описание</label>
            <textarea
              id="movie_description"
              type="text"
              name="movie[description]"
              value={this.state.movie.description}
              onChange={this.handleDescriptionChange}
            />
          </div>

          <div>
            <label htmlFor="movie_description">Обложка</label>
            <input
              id="movie_cover"
              type="file"
              name="movie[cover]"
              ref={this.fileInput}
            />
          </div>

          <div>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </Page>
    )
  }
}

export default Form;
