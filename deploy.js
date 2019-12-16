const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider('reform ice silk deputy box idea space forget milk logic grief goat', 'https://rinkeby.infura.io/v3/0390859ca13244a4b41f29b2b376a2b0');
const web3 = new Web3(provider);


const deploy= async() => {
  const  accounts = await web3.eth.getAccounts();
  
    console.log("all accounts: ",accounts);
    console.log("Attempting to deploy from account ",accounts[0]);
     const result =await new web3.eth.Contract(JSON.parse(interface))
       .deploy({data : bytecode })
       .send({from : accounts[0],gas: '1000000'});
    
    console.log(interface);   
    console.log("Contract deployed to ",result.options.address);
    
};

deploy();