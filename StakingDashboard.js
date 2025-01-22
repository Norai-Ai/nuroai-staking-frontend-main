import React, { useState } from "react";

function StakingDashboard({ account }) {
  const [stakedAmount, setStakedAmount] = useState(0);
  const [rewards, setRewards] = useState(0);

  const handleStake = () => {
    setStakedAmount(stakedAmount + 10);
    setRewards(rewards + 1);
  };

  const handleUnstake = () => {
    if (stakedAmount > 0) {
      setStakedAmount(stakedAmount - 10);
    }
  };

  return (
    <div className="p-6 bg-white text-gray-900 shadow-lg rounded-lg max-w-lg w-full">
      <h2 className="text-xl font-bold mb-4">Welcome, {account}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Staked Amount:</span> {stakedAmount} Tokens
        </p>
        <p>
          <span className="font-semibold">Rewards:</span> {rewards} Tokens
        </p>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleStake}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Stake
        </button>
        <button
          onClick={handleUnstake}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Unstake
        </button>
      </div>
    </div>
  );
}

export default StakingDashboard;