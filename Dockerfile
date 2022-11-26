FROM node:16.14 as build 

WORKDIR /vite_juegos

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /vite_juegos/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]