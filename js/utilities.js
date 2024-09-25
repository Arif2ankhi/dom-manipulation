function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}


function calculate(inputAmount,myBalance,locationBalance,id,locationTitle){
    if(inputAmount < 1 || isNaN(inputAmount)){
        alert('Invalid Donation Amount!')
    }else if(myBalance < inputAmount){
        
        alert("You Don't Have Enough Balance!")
    }else{
        my_modal.showModal();
        document.getElementById(id).innerText = (locationBalance + inputAmount).toFixed(2);
        document.getElementById('my-balance').innerText = (myBalance - inputAmount).toFixed(2);
        history(inputAmount,locationTitle);
    }
};
