class Phonecontact < ApplicationRecord
    validates :name, presence: true
    validates :phone_number, presence: true, uniqueness: true, format: { with: /\A(55\d{2}9\d{8}|55\d{2}[2-8]\d{7}|1\d{10})\z/, message: "must be a valid Brazilian or American phone number" }
    validates :notes, length: { maximum: 140 }, allow_blank: true
end

