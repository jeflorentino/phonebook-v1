FactoryBot.define do
    factory :phonecontact do
      name { "John Doe" }
      phone_number { "+1 (123) 456-7890" }
      notes { "Sample note" }
    end
end