FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# STAGE 2: Production stage
FROM node:18-alpine AS runner

# Set môi trường chạy production
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/package*.json ./

# Copy build và public vào container
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000

CMD ["npm", "start"]