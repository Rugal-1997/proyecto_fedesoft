class CreateHumedals < ActiveRecord::Migration[5.1]
  def change
    create_table :humedals do |t|

    	t.string :nombre
    	t.string :localidad
    	t.string :hectareas

      t.timestamps
    end
  end
end
