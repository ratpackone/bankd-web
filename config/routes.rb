Rails.application.routes.draw do
  
  get 'accounts/' => 'accounts#index', as: 'accounts'

  get 'users/signup', as: 'signup'
  get 'users/login', as: 'login'

  post 'users/register', as: 'register'

  post 'sessions/create', as: 'sessions_create'
  get 'sessions/destroy', as: 'sessions_destroy'

  get '/'         => 'static#index',  as: 'home'
  get '/contact'  => 'static#contact', as: 'contact'
  get '/imprint'  => 'static#imprint', as: 'imprint'
  
end