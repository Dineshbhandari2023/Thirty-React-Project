"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apikey = process.env.NEXT_Public_SECRET_API_KEY;
const apisecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async (token: string) => {
    const user = await currentUser();

    if (!user) throw new Error("Unauthorized");
    
    if (!apikey) throw new Error("Api Key not provided");

    if (!apisecret) throw new Error("Api Secret Key not provided");

    const streamClient = new StreamClient()

}