Rails.application.routes.draw do
  # get 'another_homepage/:blah' => 'pages#homepage'

  root 'pages#homepage'

  get 'pages/homepage'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
