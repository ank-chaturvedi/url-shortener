import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();

import app from "./server";

const server = createServer(app);

server.listen(3000, () => {
    console.log(`server is listening on port 3000`);
});