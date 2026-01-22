import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: false
    },
    isDark: {
        type: Boolean,
        required: true,
        default: false
    },

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);