#!/bin/bash
set -e

PG_CONTAINER="github_issue_viewer_test_db";
PG_DB="github_issue_viewer_test";
PG_USER="postgres"

export POSTGRES_CONTAINER=$PG_CONTAINER
export POSTGRES_DB=$PG_DB
export POSTGRES_USER=$PG_USER

docker-compose -f local-dev/test_db.yml up -d 

echo "========================================"
echo "please run:"
echo ">>> bundle exec rake db:setup db:migrate"
