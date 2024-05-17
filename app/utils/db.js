import mongoose from "mongoose";

const Connection = async () => {
  if (mongoose.connection[0].ready) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error("Connection error");
  }
};

export default Connection;
