import CONFIG from "../../config";
import ShortUrl from "../models/shortUrl";

export class IndexService {
  async shortenUrl(originalUrl: string) {
    const shortUrl = await ShortUrl.findOne({ originalUrl });
    if (shortUrl) {
      return shortUrl;
    }

    const str = this.generateRandomString(8);
    const url = `${CONFIG.BASE_URL}/${str}`;

    const newShortUrl = new ShortUrl({
      shortenUrl: url,
      originalUrl,
    });

    return await newShortUrl.save();
  }

  async get(shortenUrl: string) {
    const url = await ShortUrl.findOne({ shortenUrl: `${CONFIG.BASE_URL}/${shortenUrl}` });
    return url;
  }

  generateRandomString(length: number) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
