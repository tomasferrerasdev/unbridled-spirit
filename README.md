## Unbridled Spirit Bourbon shop (⚠️Under construction⚠️)
This Guide / Doc is still in progress keep coming to check updates ✅✅✅

- NextJS
- MUI
- MongoDB
- Docker

![home](https://user-images.githubusercontent.com/107090584/176201090-0132d9bf-c1f1-48ee-896b-970b7e3c5717.png)

# Initial project config

- Engine Locking
  - .nvmrc
  - .npmrc
- Quality Tools
  - eslint
  - prettier
- Git Hooks with husky
- VS Code Configuration
- Debugging

## Project Setup

We'll just begin by following NextJS docs and creating a default Next.js application with a Typescript template.

```
npx create-next-app --ts your-app-name

cd your-app-name
```

recommended to run build to verify that everything keeps working

```
yarn build
```

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager in order not to cause collisions and incompatibilities.

- **.nvmrc** tell other project devs which version of Node is used.
- **.npmrc** tell other project devs which package manager is used.

**.nvmrc**

```
lts/fermium
```

**.npmrc**

```
engine-strict=true
```

Note that the use of engine-strict didn't specifically say anything about yarn, we should do that in package.json to make it work:  
**.package.json**

````
"name": "your-app-name",
  "author": "YOUR_NAME",
  "description": "app description, something like: initial NextJS and TS Setup ",
  "version": "0.1.0",
  "private": true,
  "license" : "MIT"
  "homepage": "your_repo_url"
  "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
  ...

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```
docker-compose up -d
```
* -d means __detached__

MongoDB URL Local:

```
mongodb://localhost:27017/unbridleddb
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
