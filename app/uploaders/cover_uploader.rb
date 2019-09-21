class CoverUploader < ApplicationUploader
  process resize_to_fit: [350, 350]
end
