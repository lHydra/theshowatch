class Movie < ApplicationRecord
  enum kind: [:serial, :film]
end
