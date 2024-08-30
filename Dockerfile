# Etapa de construcción
FROM node:18.16.0-slim AS builder

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de dependencias
COPY package*.json ./
COPY prisma ./prisma/


# Copiar el resto de los archivos del proyecto
COPY . .

ARG PORT
ARG DATABASE_URL
ENV PORT=$PORT
ENV DATABASE_URL=$DATABASE_URL

# Ejecutar Prisma generate
RUN npx prisma generate

# Construir la aplicación
RUN npm run build

# Etapa final
FROM node:18.16.0-slim

# Instalar las dependencias necesarias para que funcione Prisma
RUN apt update && apt install libssl-dev -y --no-install-recommends

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

ARG PORT
ARG DATABASE_URL
ENV PORT=$PORT
ENV DATABASE_URL=$DATABASE_URL

RUN npm ci --production

RUN npm install -g pm2

# Exponer el puerto de la aplicación
EXPOSE $PORT

# Comando para iniciar la aplicación
CMD ["pm2-runtime", "dist/main.js"]