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

  it 'is valid with a Brazilian mobile phone number' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '5511987654321')
    expect(phonecontact).to be_valid
  end

  it 'is valid with a Brazilian fixed phone number' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '551132165432')
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

  it 'is not valid with a Brazilian mobile phone number with incorrect length' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '551198765432') # Número inválido (móvel com comprimento incorreto)
    expect(phonecontact).to_not be_valid
  end

  it 'is not valid with a Brazilian fixed phone number with incorrect length' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '55113216543') # Número inválido (fixo com comprimento incorreto)
    expect(phonecontact).to_not be_valid
  end

  it 'is not valid with an American phone number with incorrect length' do
    phonecontact = FactoryBot.build(:phonecontact, phone_number: '1123456789') # Número inválido (americano com comprimento incorreto)
    expect(phonecontact).to_not be_valid
  end

  it 'is valid without notes' do
    phonecontact = FactoryBot.build(:phonecontact, notes: nil)
    expect(phonecontact).to be_valid
  end

  it 'is not valid with notes longer than 140 characters' do
    long_notes = 'a' * 141
    phonecontact = FactoryBot.build(:phonecontact, notes: long_notes)
    expect(phonecontact).to_not be_valid
  end

  it 'is valid with notes of 140 characters or less' do
    valid_notes = 'a' * 140
    phonecontact = FactoryBot.build(:phonecontact, notes: valid_notes)
    expect(phonecontact).to be_valid
  end
end
