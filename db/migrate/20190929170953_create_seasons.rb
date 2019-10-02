class CreateSeasons < ActiveRecord::Migration[6.0]
  def change
    create_table :seasons do |t|
      t.belongs_to :movie
      t.datetime :release_date
    end
  end
end
