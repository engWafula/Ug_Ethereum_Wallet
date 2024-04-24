//https://faucets.chain.link/rinkeby

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/znZ_CskoANU8i_HOyEDvpIMaWGYg0518",
      accounts:["73553193e47d917206720276e00a01f30a0fa6c21675539c3a2a1ca122dc7bdc"]
    },
  },
};
