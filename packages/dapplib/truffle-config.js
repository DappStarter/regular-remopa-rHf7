require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth sister pumpkin hunt loan equal gasp'; 
let testAccounts = [
"0x7f13b3a95de7fef9fff5f81a57dddaddb41c29ccff7efe7f3920fa1531c544e0",
"0x9109948a8b8218a05429d34d7200f1f4de241bc07ca70358433686bfc9cd3a10",
"0x1ae1e189a2d33eb713ad38987e44f97081477fea12e3c115e78cbc4e6084ff64",
"0x19f019bf96ac71238f5c5fc731725c3742260fcd3620b1bb1e3add81cd380d2f",
"0x319372ee50465a95cacf864c344027b3caf9cd747d0084252a2d6096fd075f0f",
"0xeeef929c38a233fee5e06f3e1ddd581dfc5d6d49560ed6924bf6d9c266c7543c",
"0x9c3b0174075f29014d65028403bc6b3c5b24ff4e2d50bcde72f9a9806472f561",
"0x2946d0d3f4a7316be84032897659d9acac45ffb0e96c98edf7d592a04ab3deb1",
"0x518333fe1fd0de2934a9385725a5e3e14816cbd03b7755978a6f617592396000",
"0x3426f46f81b78698d9b4774b499d6667a90efcdaa6dc04bc7c3986b3ea1e5bd2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

