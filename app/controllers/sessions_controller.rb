class SessionsController < ApplicationController
	def create
		request = APIRequest.new
		request.username = params[:email]
		request.password = params[:password]
		request.extend(LoginRequest)
		
		response = APIService.new(request).login
		if response.status == "success"
			session[:token] = response.token
			session[:username] = request.username
			redirect_to accounts_path 
		else
			flash[:notice] = "Something went wrong"
			redirect_to login_path
		end
	end

	def destroy
		reset_session
		redirect_to login_path
	end
end
