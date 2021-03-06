FROM node:16.13.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build --prod

FROM nginx:1.20.1
COPY --from=build-step /app/dist/tour-of-heroes /usr/share/nginx/html
EXPOSE 4200:80