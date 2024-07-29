import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(
      `\n MongoDb connected !! DB HOST : ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo Db connection error", error);
    process.exit(1);
  }
};

export default connectDb;
