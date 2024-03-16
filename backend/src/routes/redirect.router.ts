import express from "express";
import { IndexService } from "../shared/services";

const redirectRouter = express.Router();

redirectRouter.get("/:shortenUrl", async (req, res) => {
    const { shortenUrl } = req.params;

    const service = new IndexService();
    const url = await service.get(shortenUrl);

    if(!url) {
        return res.status(404).send("Not found Actual Url");
    }
    return res.redirect(url.originalUrl);
});

export default redirectRouter;