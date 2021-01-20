class UrlsController < ApplicationController
  before_action :get_url, only: [:update]

  def index
    @urls = Url.order("pinned DESC, created_at DESC")
  end

  def new
  end

  def create
    @url = Url.new(url_params)
    @url.generate_unique_slug
    if @url.save
      render json: { success: "Url shortend successfuly", url: @url }, status: :ok
    else
      render json: { errors: @url.errors.full_messages }, status: 422
    end
  end

  def update
    if (params[:url].nil?)
      increment_url_click_count
    else
      pin_the_url
    end
  end

  private

  def pin_the_url
    pinned = params[:url][:pinned]
    if (@url.update(pinned: !pinned))
      render json: { url: @url }, status: :ok
    else
      render json: { errors: @url.errors.full_messages }, status: 422
    end
  end

  def increment_url_click_count
    @url.increment!(:click_count)
    render json: { url: @url }, status: :ok
  end

  def get_url
    @url = Url.find_by(slug: params[:id])
    response json: { errors: "Invalid URL." }, status: 404 if @url.nil?
  end

  def url_params
    params.required(:urls).permit(:original_url)
  end
end
