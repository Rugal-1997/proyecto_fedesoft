class User < ApplicationRecord
	has_secure_password
	before_save :downcase_email
	validacion_email = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
	validates :name, presence: true
	validates :email, presence: true, format: {with: validacion_email}, uniqueness: {case_sensitive: false}, length: { maximum: 50}
	validates :password, length: { minimum: 6}, presence: true , allow_nil: true
	private
	def downcase_email
		self.email.downcase!	
	end	
end
