# syntax=docker/dockerfile:1

FROM node:18-alpine as build
WORKDIR /user/src/app/

COPY package*.json      /user/src/app/
COPY pnpm-lock.yaml     /user/src/app/
COPY tsconfig*.json     /user/src/app/
COPY src                /user/src/app/src/
COPY public             /user/src/app/public/
COPY .env               /user/src/app/
COPY *.config.js        /user/src/app/
COPY *.config.mjs        /user/src/app/
COPY mdx-components.tsx /user/src/app/

RUN npm install -g pnpm
RUN pnpm i
RUN pnpm build:icons
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]