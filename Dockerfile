# Etapa de construcción
FROM node:18.16.0-slim AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY prisma ./prisma/
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    openssl \
    && npm ci \
    && apt-get purge -y --auto-remove python3 build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY . .

RUN npx prisma generate
RUN npm run build

# Etapa final
FROM node:18.16.0-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y openssl


COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

ARG PORT
ARG DATABASE_URL
ENV PORT=$PORT
ENV DATABASE_URL=$DATABASE_URL

RUN npm ci --production

EXPOSE $PORT

CMD ["npm", "run", "start:prod"]