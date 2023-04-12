import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userModel = new Schema({
    _id: {type: ObjectId},
    name: {type: String, default:""},
    email: {type: String, default:""},
    password:{type: String, default:""},
    username:{type: String, default:""}
})
const users = mongoose.model("User", userModel)
module.exports = users