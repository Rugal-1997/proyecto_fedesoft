class Humedal < ApplicationRecord
	has_many :dia_evento
	validates :nombre, presence: true
	validates :localidad, presence: true
	validates :hectareas, presence: true
end
