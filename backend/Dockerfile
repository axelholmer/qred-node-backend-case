FROM node:18.13.0

RUN mkdir /backend
WORKDIR /backend

COPY package*.json ./
COPY src/ ./src
COPY secrets/ ./secrets

RUN npm install
CMD ["npm", "run", "dev"]

EXPOSE 9090