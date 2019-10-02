# == Schema Information
#
# Table name: series
#
#  id           :bigint           not null, primary key
#  season_id    :bigint
#  release_date :datetime
#

class Series < ApplicationRecord
  belongs_to :season
end
