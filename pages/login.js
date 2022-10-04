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

import { ChainId } from "@thirdweb-dev/sdk";
import { contractAddress } from "../const/details.js";

export default function Login() {
  // Wallet & Network Information
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  // Hooks to sign in with ethereum (auth SDK)
  const login = useLogin(); // Sign in

  return (
    <div>
      {address ? (
        <>
          <p>Welcome, {address.slice(0, 6)}...</p>

          <button onClick={login}>Sign In</button>
        </>
      ) : (
        <>
          <button onClick={() => connectWithMetamask()}>Connect Wallet</button>
        </>
      )}
    </div>
  );
}
