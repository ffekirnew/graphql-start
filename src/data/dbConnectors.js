import mongoose from 'mongoose';

// Mongoose Connection
mongoose.Promise = global.Promise;
console.log(process.env.MONGODB_URI + '/' + process.env.MONGODB_DBNAME);
mongoose.connect(process.env.MONGODB_URI + '/' + process.env.MONGODB_DBNAME, {
    useMongoClient: true
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
    },
    age: {
        type: Number,
    },
    language: {
        type: String,
    },
    emails: {
        type: Array
    }
});

const Friend = mongoose.model('Friend', friendSchema);
export { Friend };