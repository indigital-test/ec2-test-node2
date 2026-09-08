FROM oven/bun:1.3.14

WORKDIR /app
COPY server.ts tsconfig.json ./

ENV PORT=80
EXPOSE 80
CMD ["bun", "server.ts"]
