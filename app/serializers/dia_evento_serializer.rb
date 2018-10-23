class DiaEventoSerializer < ActiveModel::Serializer
  attributes :id, :fecha_servicio, :servicio_id, :humedal_id
end
