import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { AxiosError } from "axios";
import { postURL } from "@/lib/services";
import { useDispatch } from "react-redux";
import { urlActions } from "@/store/urlSlice";

const formSchema = z.object({
  url: z.string(),
});

export function UrlFrom() {
    const disptach = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        url: "",
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  function onSubmit(values: z.infer<typeof formSchema>) {

    async function sendRequest(url: string) {
        try {
            const response = await postURL(url);
            disptach(urlActions.add(response.data.data));
        } catch(error) {
            if(error instanceof AxiosError) {
                console.log(error.response?.data);
            }
        }
    }
    sendRequest(values.url);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="Paste your url" {...field}/>
              </FormControl>
              <FormDescription>This is your original url.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
