class CreatePhonecontacts < ActiveRecord::Migration[7.0]
  def change
    create_table :phonecontacts do |t|
      t.string :name
      t.string :phone_number
      t.text :notes

      t.timestamps
    end
  end
end
