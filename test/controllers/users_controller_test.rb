require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  test "should get signup" do
    get :signup
    assert_response :success
  end

  test "should get login" do
    get :login
    assert_response :success
  end

  test "should register" do
  	VCR.use_cassette("registration") do
  		post :register, {email: 'hallo@123.de', password: 'password'}
  		assert_response :success	
  	end
  end

end
