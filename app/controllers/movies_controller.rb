class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end


  def show
    @movie = Movie.find(params[:id])
  end


  def edit
    @movie = Movie.find(params[:id])
  end


  def update
    @movie = Movie.find(params[:id])

    if @movie.update(movie_params)
      redirect_to @movie, notice: 'Movie was successfully updated'
    else
      redirect_to movies_path, alert: @movie.errors.full_messages
    end
  end


  private


  def movie_params
    params.require(:movie).permit(:title, :description, :cover)
  end
end
