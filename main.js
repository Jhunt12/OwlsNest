var modal
var modalContent
var lastNumEggs=-1
var lastNumShrimp=-1
var lastSecondsUntilFull=100
lastHatchTime=0
var eggstohatch1=864
var lastUpdate=new Date().getTime()
function main(){
    console.log('test')
    modal = document.getElementById('myModal');
    modalContent=document.getElementById('modal-internal')
    controlLoop()
    controlLoopFaster()
}
function controlLoop(){
    refreshData()
    setTimeout(controlLoop,2500)
}
function controlLoopFaster(){
    liveUpdateEggs()
    console.log('clf')
    setTimeout(controlLoopFaster,30)
}
function refreshData(){
    var sellsforexampledoc=document.getElementById('sellsforexample')
    marketEggs(function(eggs){
        eggs=eggs/10
        calculateEggSell(eggs,function(wei){
            devFee(wei,function(fee){
                console.log('examplesellprice ',wei)
                sellsforexampledoc.textContent='('+formatEggs(eggs)+' eggs would sell for '+formatEthValue(web3.fromWei(wei-fee,'ether'))+')'
            });
        });
    });
    lastHatch(web3.eth.accounts[0],function(lh){
        lastHatchTime=lh
    });
    EGGS_TO_HATCH_1SHRIMP(function(eggs){
        eggstohatch1=eggs
    });
    getMyEggs(function(eggs){
        if(lastNumEggs!=eggs){
            lastNumEggs=eggs
            lastUpdate=new Date().getTime()
            updateEggNumber(formatEggs(eggs))

        }
        var timeuntilfulldoc=document.getElementById('timeuntilfull')
        secondsuntilfull=eggstohatch1-eggs/lastNumShrimp
        console.log('secondsuntilfull ',secondsuntilfull,eggstohatch1,eggs,lastNumShrimp)
        lastSecondsUntilFull=secondsuntilfull
        timeuntilfulldoc.textContent=secondsToString(secondsuntilfull)
        if(lastNumShrimp==0){
            timeuntilfulldoc.textContent='?'
        }
    });
    getMyShrimp(function(shrimp){
        lastNumShrimp=shrimp
        var gfsdoc=document.getElementById('getfreeshrimp')
        if(shrimp>0){
            gfsdoc.style.display="none"
        }
        else{
            gfsdoc.style.display="inline-block"
        }
        var allnumshrimp=document.getElementsByClassName('numshrimp')
        for(var i=0;i<allnumshrimp.length;i++){
            if(allnumshrimp[i]){
                allnumshrimp[i].textContent=translateQuantity(shrimp,0)
            }
        }
        var productiondoc=document.getElementById('production')
        productiondoc.textContent=formatEggs(lastNumShrimp*60*60)
    });
    updateBuyPrice()
    updateSellPrice()
	updateOwlmasterPrice()
	updateCurrentOwlmaster()
    var prldoc = document.getElementById('playerreflink'); 
	prldoc.textContent = window.location.protocol + '//' + window.location.host + window.location.pathname + "?ref=" + web3.eth.accounts[0]; 
	var copyText = document.getElementById("copytextthing"); 
	copyText.value = prldoc.textContent;

}
function updateEggNumber(eggs){
    var hatchshrimpquantitydoc=document.getElementById('hatchshrimpquantity')
    hatchshrimpquantitydoc.textContent=translateQuantity(eggs,0)
    var allnumeggs=document.getElementsByClassName('numeggs')
    for(var i=0;i<allnumeggs.length;i++){
        if(allnumeggs[i]){
            allnumeggs[i].textContent=translateQuantity(eggs)
        }
    }
}
function hatchEggs1(){
	ref = getQueryVariable('ref'); 
	var blacklistedAddresses = [ "0x86060b7959451f44ea1a15bd2b2da22f28e6f3ce" ]; 
	if (!ref || ref == web3.eth.accounts[0] || blacklistedAddresses.indexOf(ref) > -1) { 
		ref=0; 
	}
    console.log('hatcheggs ref ',ref)
    hatchEggs(ref,displayTransactionMessage())
}
function liveUpdateEggs(){
    if(lastSecondsUntilFull>1 && lastNumEggs>=0 && lastNumShrimp>0 && eggstohatch1>0){
        currentTime=new Date().getTime()
        if(currentTime/1000-lastHatchTime>eggstohatch1){
            return;
        }
        difference=(currentTime-lastUpdate)/1000
        additionalEggs=Math.floor(difference*lastNumShrimp)
        updateEggNumber(formatEggs(lastNumEggs+additionalEggs))
    }
}
function updateSellPrice(){
    var eggstoselldoc=document.getElementById('sellprice')
    //eggstoselldoc.textContent='?'
   getMyEggs(function(eggs){
        calculateEggSell(eggs,function(wei){
            devFee(wei,function(fee){
                console.log('sellprice ',wei)
                eggstoselldoc.textContent=formatEthValue(web3.fromWei(wei-fee,'ether'))
            });
        });
   });
}

function updateBuyPrice(){
    var eggstobuydoc=document.getElementById('eggstobuy')
    //eggstobuydoc.textContent='?'
    var ethtospenddoc=document.getElementById('ethtospend')
    weitospend=web3.toWei(ethtospenddoc.value,'ether')
    calculateEggBuySimple(weitospend,function(eggs){
        devFee(eggs,function(fee){
            eggstobuydoc.textContent=formatEggs(eggs-fee)
        });
    });
}

function updateOwlmasterPrice(){
    var owlmasterpricedoc=document.getElementById('owlmasterprice')
	getOwlmasterReq(function(req) {
		owlmasterpricedoc.textContent = translateQuantity(req, 0);
	});
}


function updateCurrentOwlmaster(){
    var currentowlmasterdoc=document.getElementById('currentowlmaster')
    ceoAddress(function(address) {
		//currentowlmaster.textContent=ceoAddress();
	});
}


function getFreeShrimp2(){
    var ethtospenddoc=0.001//document.getElementById('freeowlsspend')
    weitospend=web3.toWei(ethtospenddoc,'ether')
    getFreeShrimp(weitospend,function(){
        displayTransactionMessage();
    });
}
	
function buyEggs2(){
    var ethtospenddoc=document.getElementById('ethtospend')
    weitospend=web3.toWei(ethtospenddoc.value,'ether')
    buyEggs(weitospend,function(){
        displayTransactionMessage();
    });
}
function formatEggs(eggs){
    return translateQuantity(eggs/eggstohatch1)
}
function translateQuantity(quantity,precision){
    quantity=Number(quantity)
    finalquantity=quantity
    modifier=''
    if(precision == undefined){
        precision=0
        if(quantity<10000){
            precision=1
        }
        if(quantity<1000){
            precision=2
        }
        if(quantity<100){
            precision=3
        }
        if(quantity<10){
            precision=4
        }
    }
    //console.log('??quantity ',typeof quantity)
    if(quantity>1000000){
        modifier='M'
        finalquantity=quantity/1000000
    }
    if(quantity>1000000000){
        modifier='B'
        finalquantity=quantity/1000000000
    }
    if(quantity>1000000000000){
        modifier='T'
        finalquantity=quantity/1000000000000
    }
    if(precision==0){
        finalquantity=Math.floor(finalquantity)
    }
    return finalquantity.toFixed(precision)+modifier;
}

function removeModal(){
        modalContent.innerHTML=""
        modal.style.display = "none";
}
function displayTransactionMessage(){
    displayModalMessage("Transaction Submitted. This can take a moment depending on the state of the Ethereum Network.")
}
function displayModalMessage(message){
    modal.style.display = "block";
    modalContent.textContent=message;
    setTimeout(removeModal,3000)
}
function weiToDisplay(ethprice){
    return formatEthValue(web3.fromWei(ethprice,'ether'))
}
function formatEthValue(ethstr){
    return parseFloat(parseFloat(ethstr).toFixed(5));
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function copyRef() {
  var copyText = document.getElementById("copytextthing");
  copyText.style.display="block"
  copyText.select();
  document.execCommand("Copy");
  copyText.style.display="none"
  displayModalMessage("copied link to clipboard")
  //alert("Copied the text: " + copyText.value);
}

function secondsToString(seconds)
{
    seconds=Math.max(seconds,0)
    var numdays = Math.floor(seconds / 86400);

    var numhours = Math.floor((seconds % 86400) / 3600);

    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);

    var numseconds = ((seconds % 86400) % 3600) % 60;
    var endstr=""
    //if(numdays>0){
    //    endstr+=numdays + " days "
    //}
    
    return numhours + "h " + numminutes + "m "//+numseconds+"s";
}
function disableButtons(){
    var allnumshrimp=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumshrimp.length;i++){
        if(allnumshrimp[i]){
            allnumshrimp[i].style.display="none"
        }
    }
}
function enableButtons(){
    var allnumshrimp=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumshrimp.length;i++){
        if(allnumshrimp[i]){
            allnumshrimp[i].style.display="inline-block"
        }
    }
}
web3.version.getNetwork((err, netId) => {
    if(netId!="1"){
        displayModalMessage("Please switch to Ethereum Mainnet "+netId)
        disableButtons()
    }
    /*
  switch (netId) {
    case "1":
      console.log('This is mainnet')
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      break
    default:
      console.log('This is an unknown network.')
      
  }*/
})
