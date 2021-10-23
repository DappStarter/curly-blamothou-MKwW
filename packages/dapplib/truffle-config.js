require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stomach curtain mad pupil inner drop tail gesture'; 
let testAccounts = [
"0x01ba1aa250b1db7350b39c6f480fde0daa01ba8db6f906e9306ceb432da58eb2",
"0x55ecdb93924f9a6824cf2a3a2c873667f4a68dd414801ee4d1ca4b8eb67eca60",
"0x828cea000b9f0cd57f23276b256c04cde1d2c4d8ae9c048342d20e54c7d71136",
"0x712145262d3e979f9a19726da0a67d29f4e5e18e06b2a058fc82640efc694be0",
"0x03d24e9837740c2e0f6e2346f53d42a00d8336491046d25b17194f59954d3c23",
"0x57b669e63a5c9046f714b5f96e0d2aea37e8039aec1803529274a6f74d0be178",
"0xa5f048180dda4d132c5c190f4ebdeebabefd38322a134702a98cc9f34c517582",
"0x703eca0a859e8661c1f125bf6f1f71d20364ea8fbd0871350eeb1a4bb36c77a2",
"0x8c47e735e4e14ce216a34fe340833fd79a8a12ea809e0e97d65d18d7b917d2fe",
"0x678026ecda0d0a8e477ba658f8a798969f76113aadfd852f77d968f4810c598f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

