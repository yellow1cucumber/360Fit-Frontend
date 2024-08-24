# Stage 1: Сборка приложения
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli@18
RUN npm ci
COPY . .
RUN ng build

# Stage 2: Запуск nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
