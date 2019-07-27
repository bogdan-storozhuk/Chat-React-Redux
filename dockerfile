FROM node:8
COPY public ./public
COPY src ./src
COPY package.json ./
RUN npm install

CMD ["npm", "start"]
EXPOSE 3000