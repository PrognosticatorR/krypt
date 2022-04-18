// https://rinkeby.infura.io/v3/770f03bf1c5d4a57978f15d11fb8721f

require('@nomiclabs/hardhat-waffle');

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });
const secrets = require('./.secret.json');

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: secrets.API,
      accounts: [secrets.PRIVATE_KEY],
    },
  },
};
