import express, { Request } from "express";
import { responseProcessor } from "../shared/utils/response.processor";
import { SuccessResponse } from "../shared/utils/success.response";
import { validate } from "../shared/utils/validate";
import { postShortUrl } from "../shared/validators/post.chain";
import { IndexService } from "../shared/services";
import { TShortUrlDocument } from "../shared/models/shortUrl";

const router = express.Router();


router.get('/ping', responseProcessor(async () => {
    return new SuccessResponse({}, "pong");
}));

router.post('/short-url', validate(postShortUrl), responseProcessor(async (req: Request) => {
    const originalUrl = req.body.url;
    
    const service = new IndexService();
    const shortenUrl: TShortUrlDocument = await service.shortenUrl(originalUrl);


    return new SuccessResponse({
        originalUrl: shortenUrl.originalUrl,
        shortenUrl: shortenUrl.shortenUrl,
    });
}));

export default router;