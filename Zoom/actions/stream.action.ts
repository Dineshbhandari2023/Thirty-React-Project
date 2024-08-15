"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apikey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apisecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if (!user) throw new Error("Unauthorized"); 
    if (!apikey) throw new Error("Api Key not provided");
    if (!apisecret) throw new Error("Api Secret Key not provided");

    const client = new StreamClient(apikey, apisecret)
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

    const issued =  Math.floor(Date.now() / 1000) - 60;

    const token = client.createToken(user.id, exp, issued)
    return token;

}