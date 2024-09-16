FROM node:18.16.0-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN apt-get update && apt-get install -y openssl
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma Client code
RUN npx prisma generate

# **Compila el código TypeScript para generar la carpeta dist**
RUN npm run build

# Set environment variables
ARG PORT
ARG DATABASE_URL
ENV PORT=$PORT
ENV DATABASE_URL=$DATABASE_URL

# Expose the port
EXPOSE $PORT

# Command to run the app
CMD [ "npm", "run", "start:prod" ]