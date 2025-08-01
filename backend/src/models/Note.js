import mongoose from "mongoose";

//1: create schema
// 2: model based off the schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        },
    content: {
        type:String,
        required: true,
    },
},
{ timestamps: true } //createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema)

export default Note