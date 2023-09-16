import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backend",
    })
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
};

// export const connectDb = () => {
//   const { connection } = mongoose.connect(process.env.MONGO_URI);
//   console.log("connect to db");
// };
