Rails.application.routes.draw do
  root "urls#index"
  resources :urls
  resources :reports, only: [:new, :create]
  get "/:id", to: "urls#update"
end
