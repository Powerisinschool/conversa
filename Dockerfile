FROM node:18-alpine
WORKDIR /app

COPY ./conversa-backend/ .
RUN yarn install --immutable --frozen-lock-file
RUN yarn build

CMD [ "dist/main" ]
