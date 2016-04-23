class ErrorResponse

	attr_accessor :status, :message

	def initialize status, message
		@status = status
		@message = message
	end
	
end