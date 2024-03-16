import $axios from "./axiosCustom";

export async function postURL(url: string) {
    const response = await $axios.post("/short-url", {
        url
    });
    return response;
}