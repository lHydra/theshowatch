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
  enum status: [:released, :expected, :coming_out]

  mount_uploader :cover, CoverUploader

  validates :title, :description, presence: true


  def permalink
    routes.movie_path(self)
  end


  def seasons_count
    I18n.t('counts.season', count: seasons.count)
  end


  def fields
    except_attributes = %w(id title cover status created_at updated_at)
    as_json(except: except_attributes, methods: :seasons_count)
  end


  private


  def routes
    Rails.application.routes.url_helpers
  end
end
