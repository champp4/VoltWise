FROM node:22-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
ENV NODE_ENV=production
EXPOSE 8080
USER node
CMD ["node", "index.js"]
