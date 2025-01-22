import React, { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import StakingDashboard from "./components/StakingDashboard";

function App() {
  const [account, setAccount] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
      <header className="p-6 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-bold">NuroAI Staking Platform</h1>
        <p className="text-sm mt-2">Securely stake your tokens and earn rewards!</p>
      </header>
      <main className="flex-grow flex items-center justify-center p-6">
        {!account ? (
          <WalletConnect setAccount={setAccount} />
        ) : (
          <StakingDashboard account={account} />
        )}
      </main>
      <footer className="p-4 bg-gray-800 text-center text-gray-400 text-sm">
        Powered by NuroAI | Secure Staking for Everyone
      </footer>
    </div>
  );
}

export default App;