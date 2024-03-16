import { CopyIcon } from "@radix-ui/react-icons";
import { useToast } from "./ui/use-toast";

export function UrlItem({ item }) {
    const { toast } = useToast();
    function copyToClipboard() {
        navigator.clipboard.writeText(item.shortenUrl)
        const { dismiss } = toast({
            title: "Successfully copied to clipboard",
        });

        setTimeout(dismiss, 1000);
    }
    return (
        <li className="items-center space-x-4 rounded-md border p-4 flex gap-x-4 w-1/2 justify-between">
            <div className="flex flex-col gap-y-2">
                <a href={item.shortenUrl} target="_blank" className="scroll-m-20 text-xl font-semibold tracking-tight">{item.shortenUrl}</a>
                <p>{item.originalUrl}</p>
            </div>
            <CopyIcon className="cursor-pointer" onClick={copyToClipboard}/>
        </li>
    )
}