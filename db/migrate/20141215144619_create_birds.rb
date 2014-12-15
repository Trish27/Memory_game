class CreateBirds < ActiveRecord::Migration
  def change
    create_table :birds do |t|
      t.string  :name
      t.string  :latin_name
      t.text    :description
      t.string  :category
      t.string  :image_url
      t.string  :info_url

      t.timestamps
    end
  end
end
