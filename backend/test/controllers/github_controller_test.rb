# frozen_string_literal: true

require 'test_helper'

class GithubControllerTest < ActionDispatch::IntegrationTest
  code = 'github_authorization_code'

  mock_github_client = Minitest::Mock.new
  def mock_github_client.get_token(_code)
    mock_oauth_token = Minitest::Mock.new
    def mock_oauth_token.token
      'github_access_token'
    end

    mock_oauth_token
  end

  test 'signin exchanges code for github access token' do
    Github.stub :new, mock_github_client do
      post signin_url, params: { code: code }

      json_response = JSON.parse(response.body)
      assert_equal 'github_access_token', json_response['access_token']
    end
  end
end
