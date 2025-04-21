FROM node:18.20.4-alpine AS common-build-stage

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

# final-stage
FROM node:18.20.4-alpine

WORKDIR /app

COPY --from=common-build-stage /app .

COPY . . 
RUN yarn build

EXPOSE 4173

CMD ["yarn", "preview", "--host", "0.0.0.0"]
