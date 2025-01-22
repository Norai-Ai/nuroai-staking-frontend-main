import React from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

const injected = new InjectedConnector({ supportedChainIds: [1, 4] });

function WalletConnect({ setAccount }) {
  const { activate, account } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injected);
      setAccount(account);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <div className="p-6 bg-white text-gray-900 shadow-lg rounded-lg">
      {!account ? (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Connect Wallet
        </button>
      ) : (
        <p className="text-lg font-medium">Connected as: {account}</p>
      )}
    </div>
  );
}

export default WalletConnect;