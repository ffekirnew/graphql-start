import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema/schema";

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use( '/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

export { app };