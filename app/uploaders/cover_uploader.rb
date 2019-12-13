class CoverUploader < ApplicationUploader
  version :main do
    process resize_to_fit: [1280, 900]
  end

  version :card do
    process resize_to_fill: [350, 405]
  end
end
