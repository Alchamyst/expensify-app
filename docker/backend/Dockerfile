FROM node:20.9.0-alpine AS build

WORKDIR /app

# Copy pakcage.json and yarn.lock 
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --verbose

# Copy source code
COPY . .

# Setup databse variables using build arguments
ARG FIREBASE_API_KEY
ARG FIREBASE_AUTH_DOMAIN
ARG FIREBASE_DATABASE_URL
ARG FIREBASE_PROJECT_ID
ARG FIREBASE_STORAGE_BUCKET
ARG FIREBASE_MESSAGING_SENDER_ID
ARG FIREBASE_APP_ID

ENV FIREBASE_API_KEY=$FIREBASE_API_KEY
ENV FIREBASE_AUTH_DOMAIN=$FIREBASE_AUTH_DOMAIN
ENV FIREBASE_DATABASE_URL=$FIREBASE_DATABASE_URL
ENV FIREBASE_PROJECT_ID=$FIREBASE_PROJECT_ID
ENV FIREBASE_STORAGE_BUCKET=$FIREBASE_STORAGE_BUCKET
ENV FIREBASE_MESSAGING_SENDER_ID=$FIREBASE_MESSAGING_SENDER_ID
ENV FIREBASE_APP_ID=$FIREBASE_APP_ID

# Build
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