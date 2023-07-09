# Graphql Start

GraphQL-Start is a comprehensive starter kit and boilerplate repository that provides a solid foundation for developing GraphQL-based applications with express.js and MongoDb.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- [x] GraphQL
- [x] Express.js
- [x] MongoDB
- [x] Mongoose
- [x] SQLite
- [x] Sequelize

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Yarn](https://yarnpkg.com/en/) (Optional)

### Installation

#### 1. Clone the repository

```bash
git clone https://www.github.com/ffekirnew/graphql-start
cd graphql-start
```

#### 2. Install dependencies

```bash
yarn install
```

You can use npm instead of yarn.

#### 3. Create a `.env` file

```bash
touch .env
```

Add the following environment variables to the `.env` file.

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/graphql-start
```

#### 4. Start the server

```bash
yarn start
```

#### 5. Open GraphQL Playground

Open your browser and go to `http://localhost:3000/graphql` Or the port you specified in the `.env` file.

### Usage

#### Directory Structure

```sh
.
├── LICENSE
├── README.md
├── package.json
├── src
│   ├── app.js
│   ├── config
│   │   └── config.js
|   |   └── logger.js
│   ├── graphql
│   │   ├── resolvers
│   │   │   └── resolvers.js
│   │   └── schema
│   │       └── schema.js
│   ├── index.js
│   └── models
│       └── Friend.js
└── yarn.lock
```

To explain the file structure, I will use the following example:

```js
const User = require("./models/User");
```

##### `app.js`

This file is used to initialize the express.js application.

##### `config/index.js`

This file is used to initialize the environment variables.

##### `graphql/resolvers/index.js`

This file is used to initialize the GraphQL resolvers.

##### `graphql/schema/index.js`

This file is used to initialize the GraphQL schema.

##### `index.js`

This file is used to initialize the server.

##### `models/index.js`

This file is used to initialize the Mongoose models.

#### Adding a new model

To add a new model, you need to create a new file in the `models` directory. For example, if you want to create a `User` model, you need to create a `User.js` file in the `models` directory. Then, you need to create a new schema in the `graphql/schema` directory. For example, if you want to create a `User` schema, you need to create a `User.js` file in the `graphql/schema` directory. Finally, you need to create a new resolver in the `graphql/resolvers` directory. For example, if you want to create a `User` resolver, you need to create a `User.js` file in the `graphql/resolvers` directory.

#### Adding a new resolver

To add a new resolver, you need to create a new file in the `graphql/resolvers` directory. For example, if you want to create a `User` resolver, you need to create a `User.js` file in the `graphql/resolvers` directory. Then, you need to create a new schema in the `graphql/schema` directory. For example, if you want to create a `User` schema, you need to create a `User.js` file in the `graphql/schema` directory. Finally, you need to create a new model in the `models` directory. For example, if you want to create a `User` model, you need to create a `User.js` file in the `models` directory.

#### Adding a new schema

To add a new schema, you need to create a new file in the `graphql/schema` directory. For example, if you want to create a `User` schema, you need to create a `User.js` file in the `graphql/schema` directory. Then, you need to create a new resolver in the `graphql/resolvers` directory. For example, if you want to create a `User` resolver, you need to create a `User.js` file in the `graphql/resolvers` directory. Finally, you need to create a new model in the `models` directory. For example, if you want to create a `User` model, you need to create a `User.js` file in the `models` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
