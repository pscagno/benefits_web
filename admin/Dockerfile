FROM node:18-alpine as build-deps

WORKDIR /usr/src/app
COPY ./admin/package.json ./
COPY ./admin/yarn.lock ./

# Building React application pnpm
#RUN npm install -g pnpm
#RUN pnpm install
#COPY ./web/ ./
#RUN pnpm build

# Building React application yarn
RUN yarn
COPY ./admin/ ./
RUN yarn build

# Hosting react application with Nginx
FROM nginx:latest
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
COPY ./admin/nginx/default.conf /etc/nginx/conf.d/
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]