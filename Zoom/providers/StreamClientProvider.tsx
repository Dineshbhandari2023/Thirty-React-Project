import { useUser } from "@clerk/nextjs";
import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const userId = "user-id";
const token = "authentication-token";
const user: User = { id: userId };

const streamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded && user) return;
    if (apiKey) throw new Error("API key Missing");

    const videoClient = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      token,
    });
    setVideoClient(videoClient);
  }, [user, isLoaded]);

  return <StreamVideo client={videoClient}></StreamVideo>;
};

export default streamVideoProvider;
