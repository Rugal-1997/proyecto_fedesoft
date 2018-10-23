class CreateDiaEventos < ActiveRecord::Migration[5.1]
  def change
    create_table :dia_eventos do |t|

    	t.date :fecha_servicio
    	t.references :servicio, :humedal, foreing_key: true

      t.timestamps
    end
  end
end
