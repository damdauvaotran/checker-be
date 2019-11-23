docker image build -t ubuntu-mysql:1.0 .
docker run -it --name master --entrypoint /bin/sh ubuntu-mysql:1.0
docker start -ia 
docker inspect bridge

nano /etc/mysql/mysql.conf.d/mysqld.cnf     