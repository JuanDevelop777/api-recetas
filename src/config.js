import mongoose from "mongoose";

const url = process.env.MONGO_URI;

mongoose.connect(url)
.then((data) => console.log("connection with db is ok"))
.catch((error) => console.log("connection with db failed"));
