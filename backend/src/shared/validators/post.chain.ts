import { body } from "express-validator";

export const postShortUrl = [
    body("url", "Must be a valid url format").isURL({
        require_tld: false,
    })
]