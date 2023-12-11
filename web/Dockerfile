FROM node:18-alpine as build-deps

WORKDIR /usr/src/app
COPY ./web/package.json ./
COPY ./web/yarn.lock ./

# Building React application 
# RUN pnpm install
# COPY ./web/ ./

# Build the React application
# RUN pnpm build

RUN yarn
COPY ./web/ ./
RUN yarn build

# Hosting react application with Nginx
FROM nginx:latest
# COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
COPY ./web/nginx/default.conf /etc/nginx/conf.d/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]