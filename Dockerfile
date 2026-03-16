# syntax=docker/dockerfile:1.6

############################
# 1) Dependencies
############################
FROM node:20-alpine AS deps
WORKDIR /app

# Necesario para algunas dependencias nativas en Alpine
RUN apk add --no-cache libc6-compat

# Habilita pnpm via corepack
RUN corepack enable

# Copiamos solo manifests para aprovechar caché
COPY package.json pnpm-lock.yaml ./

# Instala dependencias (incluye dev deps para build)
RUN pnpm install --frozen-lockfile

############################
# 2) Builder
############################
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN corepack enable

# Copia deps ya instaladas
COPY --from=deps /app/node_modules ./node_modules

# Copia el resto del proyecto
COPY . .

# Next.js recomendado: output standalone
# (Lo ajustamos en next.config.mjs abajo)
ENV NODE_ENV=production

# Build
RUN pnpm build

############################
# 3) Runner (producción)
############################
FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario no-root (buena práctica)
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copiamos solo lo necesario para correr el standalone
# Esto requiere: output: 'standalone' en next.config.mjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Si usas archivos estáticos fuera de /public, o configs extras, se copian aquí.
# COPY --from=builder /app/some-folder ./some-folder

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]