# Use an official Node.js image as a base image
FROM node:21-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy the rest of the application code
COPY . ./

# Install dependencies
RUN npm i


# Build the React app
RUN npm run build

# Expose the port the app will run on
EXPOSE 5000

# Define the command to run your application
CMD ["npm","run","preview"]