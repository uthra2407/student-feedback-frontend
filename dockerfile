FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run  # <-- This will list available scripts
RUN cat package.json  # <-- This will print package.json

RUN npm run build  # <-- This should now work

CMD ["npx", "serve", "-s", "build"]