docker build -t myFood-image .

docker tag myFood-image registry.heroku.com/myFood/web


docker push registry.heroku.com/myFood/web

heroku container:release web -a myFood