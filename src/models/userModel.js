import mongoose, { Schems, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //unique: true
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/djkj85f6z/image/upload/v1635491342/default_user_image.png"
    },
    role: {
        type: String,
        required: true,
        default: "subscriber",
        //lowercase: true,
        enum: ["admin", "subscriber","suspended"],
    },
    password: {
        type: String,
        required: true,
        //minlength: 8,
        //select: false,
    },
    resetToken: {
        type: String,
        required: true,
        default: Date.now().toString()
        //resetTokenExpiration: Date,
    },
    tokenExpiryDate: {
        type: Date,
        required: true,
        default: Date.now() + 1000 * 60 * 60 * 24 * 30 // 30 days
    }
},
{ timestamps: true }
)

const User = models?.User || mongoose.model("User", userSchema)
export default User;
