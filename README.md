# Betting Dashboard

NOTE: (I used node v20.12.1, if you use nvm switch to the same version to avoid issues)

## Setup

```bash

npm install

docker-compose up -d

npx prisma migrate dev --name init

npx ts-node prisma/seed.ts

npm run dev
```

Open http://localhost:3000 in your browser

For authentication to secure api and frontend i would use something like clerk (clerk.com)
