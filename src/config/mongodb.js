import { config } from './config';
import mongoose from 'mongoose';

// Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoose.url, config.mongoose.options);

let mongooseConnection = mongoose.connection;
mongooseConnection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

export { mongooseConnection };