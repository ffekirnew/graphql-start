import mongoose from 'mongoose';

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