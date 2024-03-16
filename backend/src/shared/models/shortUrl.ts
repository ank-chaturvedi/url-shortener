import mongoose, { HydratedDocument, Schema } from "mongoose";

export interface IShortUrl {
    shortenUrl: string;
    originalUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

const schema = new Schema<IShortUrl>({
    shortenUrl: {
        type: String,
        require: true,
        unique: true,
    },
    originalUrl: {
        type: String,
        require: true,
        unique: true,
    },
}, { timestamps: true });

const ShortUrl = mongoose.model<IShortUrl>("ShortUrl", schema);

export type TShortUrlDocument = HydratedDocument<IShortUrl>;

export default ShortUrl;