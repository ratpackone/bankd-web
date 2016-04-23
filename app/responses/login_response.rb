class LoginResponse 
	include ActiveModel::Validations

	attr_accessor :status, :token
	validates_presence_of :status, :token

	def initialize status, token
		@status = status
		@token = token
	end

end