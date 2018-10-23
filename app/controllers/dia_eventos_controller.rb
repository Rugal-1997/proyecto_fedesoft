class DiaEventosController < ApplicationController
  before_action :authenticate_user, only: [:create, :update, :destroy]
  before_action :set_dia_evento, only: [:show, :update, :destroy]

  # GET /dia_eventos
  # GET /dia_eventos.json
  def index
    @dia_eventos = DiaEvento.all
  end

  # GET /dia_eventos/1
  # GET /dia_eventos/1.json
  def show
  end

  # POST /dia_eventos
  # POST /dia_eventos.json
  def create
    @dia_evento = DiaEvento.new(dia_evento_params)

    if @dia_evento.save
      render json: @dia_evento, status: :created, location: @dia_evento
    else
      render json: @dia_evento.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dia_eventos/1
  # PATCH/PUT /dia_eventos/1.json
  def update
    if @dia_evento.update(dia_evento_params)
      render json: @dia_evento
    else
      render json: @dia_evento.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dia_eventos/1
  # DELETE /dia_eventos/1.json
  def destroy
    @dia_evento.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dia_evento
      @dia_evento = DiaEvento.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def dia_evento_params
      params.require(:dia_evento).permit(:fecha_servicio, :servicio_id, :humedal_id)
    end
end
