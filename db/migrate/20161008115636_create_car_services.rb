class CreateCarServices < ActiveRecord::Migration
  def change
    create_table :car_services do |t|
      t.string :license
      t.string :details
      t.string :type
      t.integer :location_id

      t.timestamps null: false
    end
  end
end
