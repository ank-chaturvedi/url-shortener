import express from "express";
import cors from "cors";
import connectDB from "./shared/databases/connect";
import { responseProcessor } from "./shared/utils/response.processor";
import { NotFoundError } from "./shared/utils/api.error";
import router from "./routes/index.router";
import redirectRouter from "./routes/redirect.router";


const app = express();

app.use(cors());
app.use(express.json());

(function () {
    connectDB();
})();

app.use("/api", router);

app.use("/", redirectRouter);

app.use(responseProcessor(async () => {
    throw new NotFoundError("not found");
}));

export default app;
