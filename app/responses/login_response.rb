class LoginResponse 

	attr_accessor :status, :token

	def initialize status, token
		@status = status
		@token = token
	end

end