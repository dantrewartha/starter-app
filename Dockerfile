# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:19-alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm install -g npm@9.x
RUN npm ci --only-production
RUN npm run build

# nginx state for serving content
FROM nginx:alpine
# Metadata
LABEL author="BUNN"
EXPOSE 80
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html/[--CHANGE_ME--]
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/dist .
# Copy nginx conf
COPY ./nginx-docker/nginx.conf /etc/nginx/nginx.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
