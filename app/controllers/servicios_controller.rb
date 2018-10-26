class ServiciosController < ApplicationController
  before_action :authenticate_user, only: [:create, :update, :destroy]
  before_action :set_servicio, only: [:show, :update, :destroy]

  # GET /servicios
  # GET /servicios.json
  def index
    @servicios = Servicio.all
    render json: @servicios
  end

  # GET /servicios/1
  # GET /servicios/1.json
  def show
    render json: @servicio
  end

  # POST /servicios
  # POST /servicios.json
  def create
    @servicio = Servicio.new(servicio_params)

    if @servicio.save
      render json: @servicio, status: :created, location: @servicio
    else
      render json: @servicio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /servicios/1
  # PATCH/PUT /servicios/1.json
  def update
    if @servicio.update(servicio_params)
      render json: @servicio
    else
      render json: @servicio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /servicios/1
  # DELETE /servicios/1.json
  def destroy
    @servicio.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_servicio
      @servicio = Servicio.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def servicio_params
      params.require(:servicio).permit(:nombre, :descripcion)
    end
end
