class Phonecontact < ApplicationRecord
    validates :name, presence: true
    validates :phone_number, presence: true, uniqueness: true, format: { with: /\A(\+55 \(\d{2}\) \d{4,5}-\d{4}|\+1 \(\d{3}\) \d{3}-\d{4})\z/, message: "must be a valid Brazilian or American phone number" }
    validates :notes, length: { maximum: 500 }, allow_blank: true
end
