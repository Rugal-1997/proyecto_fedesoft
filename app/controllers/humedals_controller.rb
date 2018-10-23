class HumedalsController < ApplicationController
  before_action :authenticate_user, only: [:update, :destroy]
  before_action :set_humedal, only: [:show, :update, :destroy]

  # GET /humedals
  # GET /humedals.json
  def index
    @humedals = Humedal.all
  end

  # GET /humedals/1
  # GET /humedals/1.json
  def show
  end

  # POST /humedals
  # POST /humedals.json
  def create
    @humedal = Humedal.new(humedal_params)

    if @humedal.save
      render json: @humedal, status: :created, location: @humedal
    else
      render json: @humedal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /humedals/1
  # PATCH/PUT /humedals/1.json
  def update
    if @humedal.update(humedal_params)
      render json: @humedal
    else
      render json: @humedal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /humedals/1
  # DELETE /humedals/1.json
  def destroy
    @humedal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_humedal
      @humedal = Humedal.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def humedal_params
      params.require(:humedal).permit(:nombre, :localidad, :hectareas)
    end
end
