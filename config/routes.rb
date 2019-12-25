Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  root to: 'movies#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :movies

  devise_scope :user do
    get 'users/check_for_user', to: 'users/sessions#check_for_user'
  end
end
