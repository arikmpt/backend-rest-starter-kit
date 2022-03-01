# Getting Started

This starter-kit was created to make it fast on init for my new project, this starter-kit is backend only using express typescript mongoose and graphQL

[My Reqo]: https://github.com/arikmpt

## How to start

You need first to install the project's dependencies

```bash
npm i docsify-cli migrate-mongo yarn -g
```
```bash
yarn install
```

Don't forget to migrate the database

- In dev mode
```bash
yarn run migrate:dev
```
- In test mode
```bash
yarn run migrate:test
```
- In prod mode
```bash
yarn run migrate:prod
```

## Start The Project

After install all depedencies and run the migration, let's we start the project

```bash
yarn run dev
```

## Build The Project

All good for production? let's we build the project by do these steps

- Build
```bash
yarn run build
```

- Start
```bash
yarn start
```

# Migration

Sometimes we need a migration to initialize a data or creating index in mongodb

## Create Migration File

To create a migration file, it's so easy just run this command

```bash
npx migrate-mongo create {{migration_name}}
```

then you can follow the existed migration file in this project

# Unit Testing

i'm using jest and supertest for test your code, all test files saved on `src/__test__`, and run this command to execute the test

```bash
yarn run test
```

# Eslint

i'm using eslint for this project

- lint
```bash
yarn run lint
```

- lint with fix
```bash
yarn run lint:fix
```
