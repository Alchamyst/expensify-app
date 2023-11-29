FROM node:20.9.0-alpine AS build

WORKDIR /app

# Copy pakcage.json and yarn.lock 
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code and build 
COPY . .
RUN npm run build:prod


# Use Node to serve the application
FROM node:20.9.0-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production

# Copy the 'dist' directory from the build image to the node server
COPY --from=build /app/public /app/public
COPY --from=build /app/server /app/server

EXPOSE 3000

# Start server when the container runs
CMD ["node", "server/server.js"]