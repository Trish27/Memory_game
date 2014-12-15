class Bird < ActiveRecord::Base
  validates_presence_of :name, :latin_name, :description, :category
  validates :image_url, format: {with: /https{0,1}:\/\//}
  validates :info_url,  format: {with: /https{0,1}:\/\//}

end
