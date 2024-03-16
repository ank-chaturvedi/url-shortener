import { useSelector } from "react-redux";
import { UrlItem } from "./UrlItem";

export function Urls() {
    const { urls } = useSelector((state: any) => state.shortUrl);
    return (
        <ul className="flex flex-col gap-y-4">
            {urls && urls.map((item: any, index: number) => (
                <UrlItem key={index} item={item} />
            ))}
        </ul>
    );
}