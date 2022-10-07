import {
  useAddress,
  useMetamask,
  Web3Button,
  useEditionDrop,
  useClaimNFT,
  useNetwork,
  useNetworkMismatch,
  useUser,
  useLogin,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

import { chainId } from "@thirdweb-dev/sdk";
import { contractAddress } from "../const/details.js";

export default function Login() {
  // Wallet & Network Information
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  // Hooks to sign in with ethereum (auth SDK)
  const login = useLogin(); // Sign in

  return (
    <div className={styles.container} style={{ height: 700 }}>
      {address ? (
        <>
          <p>Welcome, {address.slice(0, 6)}...</p>

          <button
            onClick={() => {
              login(), console.log(login);
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              console.log("das is address" + address);
              //console.log("das is chainid" + chainId);
            }}
          >
            Console.log Address
          </button>
        </>
      ) : (
        <>
          <button
            className={styles.mainButton}
            style={{ width: 256 }}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </button>
          {/*
          <p>
            For demo purposes, you can claim an NFT from our collection below:
          </p>

          <Web3Button
            contractAddress={contractAddress}
            action={(contract) => contract.erc1155.claim(0, 1)}
            accentColor='#F213A4'
          >
            Claim NFT
          </Web3Button>*/}
        </>
      )}
    </div>
  );
}
