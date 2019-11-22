FROM ubuntu:16.04

ENV MYSQL_PW 12345678
RUN apt-get update
RUN echo "mysql-server mysql-server/root_password password $MYSQL_PW" | debconf-set-selections
RUN echo "mysql-server mysql-server/root_password_again password $MYSQL_PW" | debconf-set-selections
RUN apt-get install -y mysql-server 
RUN apt-get install -y nano 