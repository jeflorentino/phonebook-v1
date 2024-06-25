class PhonecontactsController < ApplicationController
  before_action :set_phonecontact, only: %i[ show update destroy ]

  # GET /phonecontacts
  def index
    @phonecontacts = Phonecontact.all

    render json: @phonecontacts
  end

  # GET /phonecontacts/1
  def show
    render json: @phonecontact
  end

  # POST /phonecontacts
  def create
    @phonecontact = Phonecontact.new(phonecontact_params)

    if @phonecontact.save
      render json: @phonecontact, status: :created, location: @phonecontact
    else
      render json: @phonecontact.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /phonecontacts/1
  def update
    if @phonecontact.update(phonecontact_params)
      render json: @phonecontact
    else
      render json: @phonecontact.errors, status: :unprocessable_entity
    end
  end

  # DELETE /phonecontacts/1
  def destroy
    @phonecontact.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_phonecontact
      @phonecontact = Phonecontact.find(params[:id])
      rescue ActiveRecord::RecordNotFound
       render json: { error: 'Phonecontact not found' }, status: :not_found
    end

    # Only allow a list of trusted parameters through.
    def phonecontact_params
      params.require(:phonecontact).permit(:name, :phone_number, :notes)
    end
end
