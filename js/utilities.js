function getInputValueByID(id){
    return parseFloat(document.getElementById(id).value);
};

function getBalanceById(id){
    return parseFloat(document.getElementById(id).innerText);
};

function calculate(inputMoney,availableBalance,locationBalance,id,locationHeading){
    if(inputMoney < 0 || isNaN(inputMoney)){
        alert('Invalid Donation Amount')
    }
    else if(availableBalance < inputMoney){
        alert('Do not have Enough Balance')
    }else{
        my-modal.showModal();
        document.getElementById(id).innerText = (locationBalance + inputMoney).toFixed(2);
        document.getElementById('available-balance').innerText = (availableBalance -inputMoney).toFixed(2);
        history(inputMoney, locationHeading);

    }
};

function history(inputMoney,locationHeading){
    const div = document.createElement('div');
    const now = new Date()
    const dateTimeString = now.toString();
    div.classList.add('flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'border-gray', 'rounded-xl'),
    div.innerHTML =`
    <h3 class="md:text-xl font-extrabold text-black">
    ${inputMoney} Taka  donate to: ${locationHeading}
    </h3>
    <p class="text-gray bg-slate-400 rounded-lg px-4 py-2">Date:
    ${dateTimeString}
    </p>
    
    `;
    document.getElementById('history-div').appendChild(div);
}