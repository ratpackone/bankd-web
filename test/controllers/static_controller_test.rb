require 'test_helper'

class StaticControllerTest < ActionController::TestCase
	test "should get index" do
		VCR.use_cassette('signup_test') do
			get :index
			assert_response :success  
		end
	end

	test "should get contact" do
		get :contact
		assert_response :success
	end

	test "should get imprint" do
		get :imprint
		assert_response :success
	end

end
