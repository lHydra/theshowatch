class Movie < ApplicationRecord
  enum kind: [:serial, :film]
  
  mount_uploader :cover, CoverUploader
end
