class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

  def authenticate_user
  	if !session[:token] || session[:token].blank?
  		flash[:notice] = "This section is access restricted"
  		redirect_to login_path unless session[:token]
  	end  	
  end
end
