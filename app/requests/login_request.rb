require 'roar/json'

module LoginRequest
	include Roar::JSON

	property :username
	property :password

end