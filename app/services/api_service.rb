require 'httplog'

class APIService < Struct.new(:request, :jwt)
	include HTTParty

	def signup
		response = self.class.post(request.base_url + '/api/users',
			body: request.to_json, 
			headers: { 'Content-Type' => 'application/json' } )
		
		if response.success?
			LoginResponse.new("success", response["token"])
		else
			ErrorResponse.new("failed", response.response)
		end
	end

	def login
		response = self.class.post(request.base_url + '/api/login_check',
			body: request.to_json, 
			headers: { 'Content-Type' => 'application/json' } )
		
		if response.success?
			LoginResponse.new("success", response["token"])
		else
			ErrorResponse.new("failed", response.response)
		end
	end

	def find_bank_accounts
		response = self.class.get(
			request.base_url + '/api/bankaccounts',
			headers: { 
				'Content-Type' => 'application/json',
				'Authorization' => auth
			}
		)
	end

	private

	def auth
		"Bearer " + jwt
	end

end