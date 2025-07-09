FROM node:lts-alpine
WORKDIR /app

# Copiar arquivos de dependências primeiro para melhor cache
COPY package*.json ./

# Instalar dependências (incluindo devDependencies para desenvolvimento)
RUN npm install

# Copiar o resto dos arquivos
COPY . .

# Expor a porta que o Vite usa
EXPOSE 5173

# Comando para executar o servidor de desenvolvimento
CMD [ "npm", "run", "dev" ]