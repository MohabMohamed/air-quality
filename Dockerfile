FROM node:23.11-alpine AS production-builder
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

FROM node:23.11-alpine AS production
WORKDIR /app
COPY --from=production-builder /app ./
COPY ./src ./src
EXPOSE 3000
CMD ["npm", "run","start"]

FROM node:23.11-alpine AS development
WORKDIR /app
COPY --from=production-builder /app ./
RUN npm install --include=dev
VOLUME /app
EXPOSE 3000
CMD ["npm", "run","dev"]