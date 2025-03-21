FROM node:20-alpine AS node20-pnpm
RUN npm i -g pnpm

FROM node20-pnpm AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN pnpm install

FROM node20-pnpm AS production-dependencies-env
COPY ./package.json pnpm-lock.yaml ./prisma/schema.prisma /app/
WORKDIR /app
RUN pnpm install --frozen-lockfile --prod
RUN pnpm dlx prisma generate

FROM node20-pnpm AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN pnpm build

FROM node20-pnpm
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["pnpm", "start"]