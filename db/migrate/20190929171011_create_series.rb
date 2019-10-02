class CreateSeries < ActiveRecord::Migration[6.0]
  def change
    create_table :series do |t|
      t.belongs_to :season
      t.datetime :release_date
    end
  end
end
