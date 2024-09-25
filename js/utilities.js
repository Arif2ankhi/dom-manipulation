function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}


function calculate(inputAmount,myBalance,locationBalance,id,locationTitle){
    if(inputAmount <= 0 || isNaN(inputAmount)){
        alert('Invalid  Amount!')
    }else if( inputAmount > myBalance  ){
        
        alert("You Don't Have Sufficient Balance!")
    }else{
        my_modal.showModal();
        document.getElementById(id).innerText = (locationBalance + inputAmount).toFixed(2);
        document.getElementById('my-balance').innerText = (myBalance - inputAmount).toFixed(2);
        history(inputAmount,locationTitle);
    }
};

// For reload page after modal  notification
// document.getElementById('my_modal').addEventListener('click', function (event){
//     event.preventDefault();
//     window.location.reload();
// })