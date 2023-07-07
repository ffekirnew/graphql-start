const graphqlHTTP = require('express-graphql');
const app = require('express')();

app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
}));

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

