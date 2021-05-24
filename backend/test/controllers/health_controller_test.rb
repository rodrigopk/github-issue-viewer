# frozen_string_literal: true

require 'test_helper'

class HealthControllerTest < ActionDispatch::IntegrationTest
  test 'health always returns green status' do
    get health_url

    json_response = JSON.parse(response.body)
    assert_equal 'GREEN', json_response['status']
  end
end
