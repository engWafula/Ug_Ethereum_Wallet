//https://faucets.chain.link/rinkeby

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten:{
      url:"https://eth-rinkeby.alchemyapi.io/v2/XYSWRcClLboUqcoSEd9uLNSmQl0rEaNf",
      accounts:["eea92db9f48d1c068d300f1906f25521124834220dd5bf13b8da2fb8422fa939"]
    },
  },
};
