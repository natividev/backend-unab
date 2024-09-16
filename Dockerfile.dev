# Etapa de construcción
FROM node:18.16.0-slim AS builder

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de dependencias
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependencias solo para la construcción
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    openssl \
    && npm ci \
    && apt-get purge -y --auto-remove python3 build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copiar el resto de los archivos del proyecto
COPY . .

# Ejecutar Prisma generate
RUN npx prisma generate

# Construir la aplicación
RUN npm run build

# Etapa final
FROM node:18.16.0-slim

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Instalar OpenSSL
RUN apt-get update && apt-get install -y openssl

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

# Establecer variables de entorno
ARG PORT
ARG DATABASE_URL
ENV PORT=$PORT
ENV DATABASE_URL=$DATABASE_URL

# Instalar dependencias solo para producción
RUN npm ci --production

# Exponer el puerto de la aplicación
EXPOSE $PORT

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]