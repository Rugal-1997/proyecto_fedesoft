require 'test_helper'

class HumedalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @humedal = humedals(:one)
  end

  test "should get index" do
    get humedals_url, as: :json
    assert_response :success
  end

  test "should create humedal" do
    assert_difference('Humedal.count') do
      post humedals_url, params: { humedal: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show humedal" do
    get humedal_url(@humedal), as: :json
    assert_response :success
  end

  test "should update humedal" do
    patch humedal_url(@humedal), params: { humedal: {  } }, as: :json
    assert_response 200
  end

  test "should destroy humedal" do
    assert_difference('Humedal.count', -1) do
      delete humedal_url(@humedal), as: :json
    end

    assert_response 204
  end
end
