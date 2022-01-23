FROM nginx
EXPOSE 80

COPY ./dist /www/server/dist
COPY ./deploy/app.conf /etc/nginx/conf.d/default.conf
