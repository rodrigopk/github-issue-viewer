Rails.application.routes.draw do
  scope '/api' do
    get '/health', to: 'health#status'

    scope '/github' do
      post '/signin', to: 'github#signin'
    end
  end
end
