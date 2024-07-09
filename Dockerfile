FROM node:18.20 AS node
COPY . /home/node/app
WORKDIR /home/node/app
RUN yarn install
RUN yarn run build

FROM nginx:1.23
COPY --from=node /home/node/app/build/ /usr/share/nginx/html/
