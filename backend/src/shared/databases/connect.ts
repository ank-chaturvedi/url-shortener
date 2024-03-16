import mongoose from "mongoose";
import CONFIG from "../../config";

function connectDB() {
  function connect() {
    mongoose
      .connect(CONFIG.MONGO_URI)
      .then(() => {
        console.log("connected to mongodb");
      })
      .catch((error) => {
        console.log(error);
        process.exit(0);
      });
  }
  connect();

  mongoose.set("debug", CONFIG.NODE_ENV === "development");

  mongoose.connection.on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("trying to reconnect mongodb");
    connect();
  });
}

export default connectDB;
