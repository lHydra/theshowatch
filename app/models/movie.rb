# == Schema Information
#
# Table name: movies
#
#  id            :bigint           not null, primary key
#  title         :string
#  description   :text
#  kind          :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  cover         :string
#  release_date  :datetime
#  status        :integer
#  premiere_date :datetime
#  production    :string
#

class Movie < ApplicationRecord
  has_many :seasons

  enum kind: [:serial, :film]
  
  mount_uploader :cover, CoverUploader
end
