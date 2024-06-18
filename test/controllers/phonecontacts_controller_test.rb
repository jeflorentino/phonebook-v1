require "test_helper"

class PhonecontactsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @phonecontact = phonecontacts(:one)
  end

  test "should get index" do
    get phonecontacts_url, as: :json
    assert_response :success
  end

  test "should create phonecontact" do
    assert_difference("Phonecontact.count") do
      post phonecontacts_url, params: { phonecontact: { name: @phonecontact.name, notes: @phonecontact.notes, phone_number: @phonecontact.phone_number } }, as: :json
    end

    assert_response :created
  end

  test "should show phonecontact" do
    get phonecontact_url(@phonecontact), as: :json
    assert_response :success
  end

  test "should update phonecontact" do
    patch phonecontact_url(@phonecontact), params: { phonecontact: { name: @phonecontact.name, notes: @phonecontact.notes, phone_number: @phonecontact.phone_number } }, as: :json
    assert_response :success
  end

  test "should destroy phonecontact" do
    assert_difference("Phonecontact.count", -1) do
      delete phonecontact_url(@phonecontact), as: :json
    end

    assert_response :no_content
  end
end
