require 'rails_helper'

RSpec.describe Phonecontact, type: :model do
  it 'is valid with valid attributes' do
    phonecontact = FactoryBot.build(:phonecontact)
    expect(phonecontact).to be_valid
  end

  it 'is not valid without a name' do
    phonecontact = FactoryBot.build(:phonecontact, name: nil)
    expect(phonecontact).to_not be_valid
  end

  it 'is not valid without a phone number' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: nil)
    expect(phonecontact).to_not be_valid
  end

  it 'is not valid with a duplicate phone number' do
    phonecontact1 = FactoryBot.create(:phonecontact, phone_number: '11234567890')
    phonecontact2 = FactoryBot.build(:phonecontact, phone_number: '11234567890')
    expect(phonecontact2).to_not be_valid
  end

  it 'is valid with a Brazilian phone number' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '5512345678901')
    expect(phonecontact).to be_valid
  end

  it 'is valid with an American phone number' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '11234567890')
    expect(phonecontact).to be_valid
  end

  it 'is not valid with an incorrect phone number format' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '12345')
    expect(phonecontact).to_not be_valid
  end

  it 'is valid without notes' do
    phonecontact = FactoryBot.build(:phonecontact, notes: nil)
    expect(phonecontact).to be_valid
  end

  it 'is not valid with notes longer than 500 characters' do
    long_notes = 'a' * 501
    phonecontact = FactoryBot.build(:phonecontact, notes: long_notes)
    expect(phonecontact).to_not be_valid
  end

  it 'is valid with notes of 500 characters or less' do
    valid_notes = 'a' * 500
    phonecontact = FactoryBot.build(:phonecontact, notes: valid_notes)
    expect(phonecontact).to be_valid
  end
end