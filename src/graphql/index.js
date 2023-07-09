import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers/resolvers';
import { typeDefs } from './schema/schema';

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };