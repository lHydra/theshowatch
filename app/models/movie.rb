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
  enum status: { released: 1, expected: 3, coming_out: 2 }

  mount_uploader :cover, CoverUploader

  validates :title, :description, presence: true

  scope :order_by_release_date, -> { order(:status, :release_date) }

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
