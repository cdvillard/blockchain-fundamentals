module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    production: {
      host: "bcl6fpjfpao6.eastus.cloudapp.azure.com",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};