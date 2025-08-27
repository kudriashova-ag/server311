import bcrypt from "bcrypt"
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

schema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
})

const User = mongoose.model('User', schema)
export default User