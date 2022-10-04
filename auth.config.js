import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.MY_PRIVATE_KEY, //"<your-private-key-here>",
  domain: "ohmyNFT.com",
});
