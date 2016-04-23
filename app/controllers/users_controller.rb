class UsersController < ApplicationController

	before_action :redirect_logged_in_user

	def signup
	end

	def login
	end

	def register
		request = APIRequest.new
		request.username = params[:email]
		request.password = params[:password]
		request.extend(LoginRequest)
		
		response = APIService.new(request).signup
		if response.status == "success"
			session[:token] = response.token
			session[:username] = request.username
			redirect_to accounts_path 
		else
			flash[:notice] = "Something went wrong"
			redirect_to signup_path
		end
	end

	private
	
	def redirect_logged_in_user
		if session[:token] && !session[:token].blank?
			redirect_to accounts_path
		end
	end
end
