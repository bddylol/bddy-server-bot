FROM node:19.7
COPY package.json /app/
COPY package-lock.json /app/
WORKDIR /app
RUN npm install
COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start:prod"]
