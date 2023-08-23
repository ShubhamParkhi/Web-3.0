require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/wm53wrHFWArsBdSWos93-nYSPGLh6MA1",
      accounts: [
        "49dbff578c56ef0c28a392b942a3111576d94c12db2b58505ba412c30587a65f",
      ],
      gas: 2100000,
      gasPrice: 80000000000,
    },
  },
};
