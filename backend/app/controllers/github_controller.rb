# frozen_string_literal: true

class GithubController < ApplicationController
  def signin
    oauth_token = github_client.get_token(signin_params)

    render json: { access_token: oauth_token.token }
  end

  private

  def signin_params
    params.require(:code)
  end

  def github_client
    @github_client ||= Github.new(
      client_id: ENV['GITHUB_CLIENT_ID'],
      client_secret: ENV['GITHUB_CLIENT_SECRET']
    )
  end
end
