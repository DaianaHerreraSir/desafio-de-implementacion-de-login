import mongoose from "mongoose";

const { Schema } = mongoose;

const usersCollection = "users"

const usersSchema = new Schema({
    first_name: {
    type: String,
    required: true,
},
last_name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
},
role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
},
});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel