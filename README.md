# Unbridled Spirit Bourbon shop 🦃

![Screenshot 2022-08-13 133900](https://user-images.githubusercontent.com/107090584/184503066-ddee50b9-9f64-4da2-94d1-7c508c14031f.png)

This Guide / Doc is still in progress come again to check updates ✅✅✅

## Docs index

- ### What is Unbridled Spirit?
  - Technologies
  - Demo accounts
  - Usage warning
  - App features
  - App Images
- ### Unbridled Spirit API docs (autogenerated by Postman)
  - Currently available endpoints
- ### Project initialization and setup
  - Project Setup
    - create-next-app
  - Engine Locking
    - .nvmrc
    - .npmrc
  - Quality Tools
    - eslint
    - prettier
    - Git Hooks with husky
  - VS Code Configuration
    - Settings
  - Debugging
    - Launch
    - Cross env
- ### Quick start and running
  - Clone repo
  - ENV configs
  - Docker configs **(optional)**
  - MongoAtlas

## What is Unbridled Spirit?

Unbridled Spirit is an e-commerce website that allow users to order Bourbon Online and have it delivered directly on their door.

### Technologies that i use

- [NextJS](https://nextjs.org/ "NextJS official doc")
- [MUI](https://mui.com/ "Material UI official doc")
- [MongoDB](https://www.mongodb.com/ "MongoDB website")
- [Docker](https://www.docker.com/ "Docker website")
- [JWT (JSON Web Tokens)](https://jwt.io/ "JWT doc")
- [NextAuth](https://next-auth.js.org/ "NextAuth website")
- [TypeScript](https://www.typescriptlang.org/ "TypeScript official doc")
- [Paypal](https://developer.paypal.com/home "Paypal developer website")

### DEMO ACCOUNTS 🔐

| **Website**      | **user**            | **password** |
| ---------------- | ------------------- | ------------ |
| Unbridled Spirit | demouser@google.com | demouser     |
| Paypal payment   | demouser@google.com | demouser     |

### ⚠️ USAGE WARNING ⚠️

You can use your own Paypal account under your own risk but as an advice make sure that the paypal payment modal have .sandbox at the beginning of the URL. Example below ↴

<img src="https://user-images.githubusercontent.com/107090584/184007295-0b0124ce-544f-43c1-9815-e8d497b20a42.png"  width=300 />

## TODO
- Improve code readability
- Segment pages in smaller components
- Goal-gradient in shopping path

## App features

- Implement payment methods ✅
- Create and handle orders ✅
- Admin panel ✅
- Create and maintain products ✅
- ...

## App Images
<img src="https://user-images.githubusercontent.com/107090584/184010531-03549255-22f0-4cf6-9447-dd1c090ef744.jpg" width="23%"></img> <img src="https://user-images.githubusercontent.com/107090584/184010547-99e24fc3-3f24-4d26-a370-aad0a233ee79.jpg" width="23%"></img> <img src="https://user-images.githubusercontent.com/107090584/184010552-4e5aa668-3f80-4664-bf9d-6277e5440174.jpg" width="23%"></img> <img src="https://user-images.githubusercontent.com/107090584/184010556-2855d8fd-a8da-436b-aa33-831772742f25.jpg" width="23%"></img> 

# Project Setup and configs

- Project Setup
  - create-next-app
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
yarn create next-app --typescript app-name

cd app-name
```

recommended to run build to verify that everything works

```
yarn dev
```

and

```
yarn build
```

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager in order not to cause collisions and incompatibilities.

- **.nvmrc** tell other project devs which version of Node is used.
- **.npmrc** tell other project devs which package manager is used.

**.nvmrc** (make sure that .nvmrc match your current node version)

| **RELEASE** | **STATUS**      | **CODENAME** | **END OF LIFE** |
| ----------- | --------------- | ------------ | --------------- |
| v14         | Maintenance LTS | Fermium      | 2023-04-30      |

```
lts/fermium
```

**.npmrc**

```
engine-strict=true
```

we should specify engine restrictions in package.json to make it work:  
**.package.json**

```
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
```

## Quality Tools

We'll be implementing two tools: eslint and prettier in order to set some basic code styles and best practices standard that every contributor or team member should follow.

ESLint will be easier because it comes installed and pre-configured with Next.Js using -create next-app-.
We are just going to add a little bit of extra configuration and make it a bit stricter than it is by default.

.eslintrc.json

```
{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly"
  },
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

You can test it out your config by running:

```
yarn lint
```

You should get this kind of message:

```
✔ No ESLint warnings or errors
Done in 1.23s.
```

Prettier will take care of automatically formatting our files for us and following certain configs that again should be followed by the team.
It's just be needed in development mode so we need to add -D

```
yarn add -D prettier
```

We'll create two files in the root:

.prettierrc (here we configure what kind of styles conventions we'll use along the project)

```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

.prettierignore (just like any .ignore the following files will be ignored and not formatted)

```
.yarn
.next
dist
node_modules
```
