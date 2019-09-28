class CoverUploader < ApplicationUploader
  version :main do
    process resize_to_fit: [1280, 900]
  end
end
