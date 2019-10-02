class AddAdditionalFieldsToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :release_date, :datetime
    add_column :movies, :status, :integer
    add_column :movies, :premiere_date, :datetime
    add_column :movies, :production, :string
  end
end
