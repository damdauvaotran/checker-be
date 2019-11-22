docker image build -t ubuntu-mysql:1.1 .
docker run -it --name aa --entrypoint /bin/sh ubuntu-mysql:1.2 
docker start -ia 