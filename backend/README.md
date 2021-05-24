# Github Issue Viewer - Backend

## Quickstart

- Install dependencies

```shell
$ bundle install
```

- Start development database in a docker container (requires docker and docker-compose to be installed)

```shell
$ bash scripts/scripts/start-dev-db.sh
```

If you prefer to use a local postgres server, you can create the database using the following command:

```shell
$ bundle exec rake db:setup
```

- Start the development server

```shell
$ bundle exec rails s
```

You are good to go!

## Testing

Start test database in a docker container

```shell
$ bash scripts/scripts/start-test-db.sh
```

As before, you can also use your local postgres server if you prefer.

To run the tests, just run the following command:

```shell
$ bundle exec rails test
```
