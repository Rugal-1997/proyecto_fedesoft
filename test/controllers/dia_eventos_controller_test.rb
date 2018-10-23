require 'test_helper'

class DiaEventosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dia_evento = dia_eventos(:one)
  end

  test "should get index" do
    get dia_eventos_url, as: :json
    assert_response :success
  end

  test "should create dia_evento" do
    assert_difference('DiaEvento.count') do
      post dia_eventos_url, params: { dia_evento: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show dia_evento" do
    get dia_evento_url(@dia_evento), as: :json
    assert_response :success
  end

  test "should update dia_evento" do
    patch dia_evento_url(@dia_evento), params: { dia_evento: {  } }, as: :json
    assert_response 200
  end

  test "should destroy dia_evento" do
    assert_difference('DiaEvento.count', -1) do
      delete dia_evento_url(@dia_evento), as: :json
    end

    assert_response 204
  end
end
