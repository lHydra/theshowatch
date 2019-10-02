# == Schema Information
#
# Table name: seasons
#
#  id           :bigint           not null, primary key
#  movie_id     :bigint
#  release_date :datetime
#

class Season < ApplicationRecord
  has_many :series

  belongs_to :movie
end
