class ReportsController < ApplicationController
  def new
  end

  def create
    @email = params[:report][:email]
    if @email
      ReportMailer.generate_report(@email).deliver_now
      render json: { success: "Email successfuly sent." }, status: :ok
    else
      render json: { success: "Something went wrong." }, status: 400
    end
  end
end
