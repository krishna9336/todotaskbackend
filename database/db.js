import mongoose from 'mongoose';

const Connection = () => {

    const MONGODB_URI = "mongodb://localhost:27017/todooos";

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })
}

export default Connection;