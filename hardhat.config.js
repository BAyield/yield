require("@nomicfoundation/hardhat-toolbox");
const { PRIVATEKEY, apiKey } = require("./config.js");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  // defaultNetwork: "base",
  networks: {
    base: {
      url: "https://mainnet.base.org",
      // url:"https://goerli.base.org",
      accounts: [PRIVATEKEY.owner],
      saveDeployments: true,
      // gasPrice:100000000

    },
  },
  etherscan: {
    // apiKey: apiKey,
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },



};
