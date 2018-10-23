class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :humedal_id
end
