import { contractAddress } from "../const/details";

export default async function checkBalance(sdk, address) {
  const editionDrop = sdk.getEditionDrop(
    contractAddress // replace this with your contract address
  );

  const balance = await editionDrop.balanceOf(address, 0);
  console.log(balance);

  // gt = greater than
  return balance.gt(0);
}
