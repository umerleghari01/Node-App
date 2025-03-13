# Stage 1:
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY  .  /app

# Install dependencies
RUN npm install


# Stage 2: 
FROM gcr.io/distroless/nodejs20-debian12

# Set the working directory in the distroless container
WORKDIR /my-app

# Copy only the necessary files from the build stage
COPY --from=build /app  /my-app

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["index.js"]
