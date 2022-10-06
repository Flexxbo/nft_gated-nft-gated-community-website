import {
  useAddress,
  useMetamask,
  useEditionDrop,
  useClaimNFT,
  useNetwork,
  useNetworkMismatch,
  useUser,
  useLogin,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

import { ChainId } from "@thirdweb-dev/sdk";
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

          <button onClick={login}>Sign In</button>
        </>
      ) : (
        <>
          <button
            className={styles.mainButton}
            style={{ width: 258 }}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </button>
        </>
      )}
    </div>
  );
}
