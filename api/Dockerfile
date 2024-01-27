FROM node:21-alpine as build

WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY . ./
RUN npm i

# Build TypeScript source code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

CMD ["npm", "start"]
