# Stage 1: Сборка приложения
FROM node:current-alpine3.20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli@18
RUN npm ci
COPY . .
RUN ng build

# Stage 2: Запуск nginx
FROM nginx:stable-alpine3.20

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/frondent-f360fit/browser /usr/share/nginx/html

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
