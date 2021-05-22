class HealthController < ApplicationController
  def status
    render json: { status: 'GREEN' }
  end
end
