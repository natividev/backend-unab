# Etapa 1: Construcción
FROM node:18.16.0-slim AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including development dependencies)
RUN apt-get update && apt-get install -y openssl
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma Client code
RUN npx prisma generate

# **Compila el código TypeScript para generar la carpeta dist**
RUN npm run build

# Etapa 2: Producción
FROM node:18.16.0-slim

# Set working directory
WORKDIR /usr/src/app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

# Instala solo las dependencias de producción
RUN npm install --only=production

# Set environment variables
ARG PORT
ARG DATABASE_URL
ENV PORT=$PORT
ENV DATABASE_URL=$DATABASE_URL

# Expose the port
EXPOSE $PORT

# Command to run the app
CMD ["node", "dist/main.js"]