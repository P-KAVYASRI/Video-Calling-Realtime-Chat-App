import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
   console.error("Stream API key and Secret is missing");
} 

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// increase timeout
streamClient.axiosInstance.defaults.timeout = 10000;

export const upsertStreamUser = async (userData) => {
  try {
    console.log("Creating Stream user:", userData);

    const response = await streamClient.upsertUsers([userData]);

    console.log("Stream response:", response);

    return userData;
  } catch (error) {
    console.error("Stream Error Message:", error.message);
    console.error("Stream Error:", error);
    throw error;
  }
};

export const generateStreamToken=(userId)=>{};