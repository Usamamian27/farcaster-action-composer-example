import React from "react";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export default function Mint() {
  return (
    <CrossmintPayButton
      collectionId="96eb7ebf-95a4-4718-bbfd-dab3681fc493"
      projectId="b45edf65-df42-482a-8a80-68539a8a0e4b"
      mintConfig={{
        totalPrice: "0.0001",
        _values: "0.0001",
        _recipients: "0xaA6728c93a326802FC147A82FE8a795EBf27dC81",
        _referrers: "0xEDA1896bDf3908c2e480492ecfF0491a50D380eD",
        _keyManagers: "0xaA6728c93a326802FC147A82FE8a795EBf27dC81",
        _data:
          "https://docs.crossmint.com/nft-checkout/advanced/component-properties#subproperties",
      }}
      environment="staging"
      checkoutProps={{ paymentMethods: ["fiat", "ETH", "SOL"] }}
    />
  );
}
