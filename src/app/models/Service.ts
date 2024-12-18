import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);