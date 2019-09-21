class AddCoverToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :cover, :string
  end
end
