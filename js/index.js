
const donationSec =  document.getElementById('donation-sec');
const historySec = document.getElementById('history-sec');


const noakhaliBtn = document.getElementById('noakhali-btn')
const feniBtn = document.getElementById('feni-btn')
const quotaBtn = document.getElementById('quota-btn');


noakhaliBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('noakhali-input-value');
    const noakhaliBalance = getBalance('noakhali-balance')
    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    calculate(inputAmount,myBalance,noakhaliBalance,'noakhali-balance',noakhaliTitle);

});

feniBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('feni-input-value');
    const feniBalance = getBalance('feni-balance')
    const feniTitle = document.getElementById('feni-title').innerText;

    calculate(inputAmount,myBalance,feniBalance,'feni-balance',feniTitle);

});

quotaBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('quota-input-value');
    const quotaBalance = getBalance('quota-balance')
    const quotaTitle = document.getElementById('quota-title').innerText;

    calculate(inputAmount,myBalance,quotaBalance,'quota-balance',quotaTitle);

});