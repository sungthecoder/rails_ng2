class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.string :name
      t.string :description
      t.float :price

      t.timestamps
    end
  end
end
