class DiaEvento < ApplicationRecord
	belongs_to :servicio
	has_many :humedal
	validates :fecha_servicio, presence: true
end
