docker build -t myfood-image .

docker tag myfood-image registry.heroku.com/sdg-myfood/web


docker push registry.heroku.com/sdg-myfood/web

heroku container:release web -a sdg-myfood