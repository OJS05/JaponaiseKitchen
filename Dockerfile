FROM node:18-alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm update -g npm
RUN npm install --d
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates/default.conf.template
EXPOSE 3000
