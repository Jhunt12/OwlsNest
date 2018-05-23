
abi=[
	{
		"constant": false,
		"inputs": [],
		"name": "becomeOwltamer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyEggs",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getFreeOwls",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ref",
				"type": "address"
			}
		],
		"name": "hatchEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "seedMarket",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sellEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuySimple",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "calculateEggSell",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "rt",
				"type": "uint256"
			},
			{
				"name": "rs",
				"type": "uint256"
			},
			{
				"name": "bs",
				"type": "uint256"
			}
		],
		"name": "calculateTrade",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ceoAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "claimedEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "devFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "EGGS_TO_HATCH_1OWL",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getEggsSinceLastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyOwls",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getowltamerReq",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "hatcheryShrimp",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "marketEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owltamerReq",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "STARTING_OWLS",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

contractAddress="0xf0065b485407821868B5F234a3c5fdB49e25bb52"//"0xdc078ff399d0001c31454e83896e8881d164fb95"//"0x53e0B5790b67BFE4218b48D8DA14a5D47D8daeF8"//"0xd1B9D4f28A4F782Ea66C449A667135266Bccb1Bc"//"0x0a11657E4341DC2CB11282F3782E418B63F673F6"//"0x00E904aB49c0417a60Cd674d2B2628a3FD5be57d"//"0x4d990acf40aec18478849dfbb58119e55a182166"//"0xe00d440e22b3f4e8dc9672223f6e683eba8b5f06"//"0x42e33f20aced16114e53c3b236426384a5eca7f6"//"0x4b9a47db592e0a49ea913f70800bd1272c757103"//"0xf50493dd5931a35ddf4ce9c347c3de0a554f4de4"//"0x27fe61ed7f0b113fae9697219b4bfd3a80011512"

function buyEggs(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.buyEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('buyEggs ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function becomeOwltamer(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.becomeSnailmaster.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('becomeOwltamer ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getFreeOwls(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getFreeOwls.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('getFreeOwls ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function hatchEggs(ref,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatchEggs.getData(ref);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatchEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function seedMarket(eggs,eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.seedMarket.getData(eggs);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('seedMarket ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function sellEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.sellEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('sellEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuy(eth,contractBalance,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuy.getData(eth,contractBalance);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuy ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuySimple(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuySimple.getData(eth);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuySimple ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggSell(eggs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggSell.getData(eggs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggSell ',result);
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateTrade(rt,rs,bs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateTrade.getData(rt,rs,bs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateTrade ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function ceoAddress(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.ceoAddress.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('ceoAddress ',result);
            callback(result)
        }
        else{
            console.log('error :(')
        }
    });
}


function claimedEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.claimedEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('claimedEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function devFee(amount,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.devFee.getData(amount);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('devFee ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function EGGS_TO_HATCH_1OWL(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.EGGS_TO_HATCH_1OWL.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('EGGS_TO_HATCH_1OWL ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getBalance(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getBalance.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getBalance ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function getOwltamerReq(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getBalance.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getOwltamerReq ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getEggsSinceLastHatch(adr,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getEggsSinceLastHatch.getData(adr);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getEggsSinceLastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyOwls(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyOwls.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyShrimp ',web3.toDecimal(result));
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function nestOwls(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.nestOwls.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('nestOwls ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function lastHatch(address,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.lastHatch.getData(address);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('lastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function marketEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.marketEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('marketEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}



