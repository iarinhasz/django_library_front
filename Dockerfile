FROM node:22-alpine

WORKDIR /app

# Copia apenas os manifests primeiro (cache)
COPY package*.json ./

RUN npm install

# Copia o restante do projeto
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
