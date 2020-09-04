FROM node:latest

COPY ./DASHBOARD_LOGIN /root/DASHBOARD_LOGIN

RUN chmod 777 -R /root/DASHBOARD_LOGIN \
&& cd /root/DASHBOARD_LOGIN/login_page \
&& yarn \
&& yarn start \
&& cd /root/DASHBOARD_LOGIN/login_api_server \
&& yarn \
&& yarn start

EXPOSE 3000

ENTRYPOINT ["/root/DASHBOARD_LOGIN/docker/entrypoint.sh"]
