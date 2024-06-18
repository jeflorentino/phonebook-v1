class Phonecontact < ApplicationRecord
    validates :name, presence: true
    validates :phone_number, presence: true, uniqueness: true
    validates :notes, length: { maximum: 500 }, allow_blank: true
end
