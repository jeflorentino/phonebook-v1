require 'rails_helper'

RSpec.describe PhonecontactsController, type: :controller do
  let!(:phonecontact) { create(:phonecontact) }
  let(:valid_attributes) { { name: 'Jane Doe', phone_number: '15554447777', notes: 'Jane Doe address' } }
  let(:invalid_attributes) { { name: '', phone_number: 'invalid', notes: '' } }
  let(:new_attributes) { { name: 'John Updated', phone_number: '5521987654321', notes: 'John updated example' } }

  describe 'GET #index' do
    it 'returns a success response and a list of phonecontacts' do
      get :index
      expect(response).to be_successful
      expect(JSON.parse(response.body).size).to eq(Phonecontact.count)
    end
  end

  describe 'GET #show' do
    it 'returns a success response and the requested phonecontact' do
      get :show, params: { id: phonecontact.to_param }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['id']).to eq(phonecontact.id)
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new Phonecontact and returns a created status' do
        expect {
          post :create, params: { phonecontact: valid_attributes }
        }.to change(Phonecontact, :count).by(1)
        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)['name']).to eq('Jane Doe')
      end
    end

    context 'with invalid params' do
      it 'does not create a new Phonecontact and returns an unprocessable entity status' do
        expect {
          post :create, params: { phonecontact: invalid_attributes }
        }.to change(Phonecontact, :count).by(0)
        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)['name']).to include("can't be blank")
      end
    end
  end

  describe 'PATCH/PUT #update' do
    context 'with valid params' do
      it 'updates the requested phonecontact and returns a success response' do
        put :update, params: { id: phonecontact.to_param, phonecontact: new_attributes }
        phonecontact.reload
        expect(phonecontact.name).to eq('John Updated')
        expect(response).to be_successful
      end
    end

    context 'with invalid params' do
      it 'returns an unprocessable entity status' do
        put :update, params: { id: phonecontact.to_param, phonecontact: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)['name']).to include("can't be blank")
      end
    end

    context 'with a non-existing record' do
      it 'returns a not found status' do
        put :update, params: { id: 'non-existing-id', phonecontact: new_attributes }
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'with an existing record' do
      it 'destroys the requested phonecontact and returns a no content status' do
        expect {
          delete :destroy, params: { id: phonecontact.to_param }
        }.to change(Phonecontact, :count).by(-1)
        expect(response).to have_http_status(:no_content)
      end
    end

    context 'with a non-existing record' do
      it 'returns a not found status' do
        delete :destroy, params: { id: 'non-existing-id' }
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end