import mongoose from "mongoose";

export const connectMongoDB =async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI // "mongodb://localhost:270g17/supablo"
            // {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            // }
        );
        console.log("Connected to MongoDB!");
        return true;
} catch (error) {
    console.log("Error connecting to MongoDB",error);
}
};