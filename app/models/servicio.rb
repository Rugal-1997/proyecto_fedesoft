class Servicio < ApplicationRecord
	has_many :dia_evento
	validates :nombre, presence: true
	validates :descripcion, presence: true
end
