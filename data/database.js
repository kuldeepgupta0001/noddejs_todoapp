import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backend",
    })
    .then(() => console.log("connect"))
    .catch((e) => console.log(e));
};
