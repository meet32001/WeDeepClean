import mongoose from 'mongoose';

const connectMongo = async () => {
    if (mongoose.connection.readyState >= 1) return;

    mongoose
        .connect(process.env.MONGO_URI as string)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.error('MongoDB connection error:', err));
};

export default connectMongo;