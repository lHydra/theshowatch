class MoviesController < ApplicationController
  before_action :set_movie, only: %I(show edit update destroy)


  def index
    @movies = Movie.order_by_release_date
  end


  def show; end


  def new
    @movie = Movie.new
  end


  def create
    @movie = Movie.new(movie_params)

    if @movie.save
      redirect_to @movie, notice: 'Movie was successfully created', status: :see_other
    else
      redirect_to movies_path, alert: @movie.errors.full_messages.each { |_, v|}, status: :see_other
    end
  end


  def edit; end


  def update
    respond_to do |f|
      if @movie.update(movie_params)
        f.html { redirect_to @movie, notice: 'Movie was successfully updated', status: :see_other }
      else
        f.json { render json: @movie.errors }
      end
    end
  end


  private


  def set_movie
    @movie = Movie.find(params[:id])
  end


  def movie_params
    params.require(:movie).permit(:title, :description, :cover)
  end
end
