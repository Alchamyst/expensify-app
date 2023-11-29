# Use Nginx to serve the application
FROM nginx:alpine

# Move our nginx config into webserver
COPY ./docker/proxy/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]