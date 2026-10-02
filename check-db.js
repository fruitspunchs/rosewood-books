import 'dotenv/config';
import mongoose from 'mongoose';

await mongoose.connect(process.env.MONGODB_URI);
console.log(`Connected to ${mongoose.connection.name}`);
await mongoose.disconnect();