// menu button
const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');
// sections
const donationSec =  document.getElementById('donation-sec');
const historySec = document.getElementById('history-sec');
// donation buttons
const noakhaliBtn = document.getElementById('noakhali-btn')
const feniBtn = document.getElementById('feni-btn')
const quotaBtn = document.getElementById('quota-btn')

// menu btn click handles
historyBtn.addEventListener('click',function(){
    donationSec.classList.add('hidden');
    historySec.classList.remove('hidden');

    historyBtn.classList.add('bg-[#B4F461]','text-black')
    historyBtn.classList.remove('border-2' ,'border-[#111111B3]','text-[#111111B3]')

    donationBtn.classList.remove('bg-[#B4F461]','text-black')
    donationBtn.classList.add('border-2' ,'border-[#111111B3]','text-[#111111B3]')


})

donationBtn.addEventListener('click',function(){
    donationSec.classList.remove('hidden');
    historySec.classList.add('hidden');

    donationBtn.classList.add('bg-[#B4F461]','text-black')
    donationBtn.classList.remove('border-2' ,'border-[#111111B3]','text-[#111111B3]')

    historyBtn.classList.remove('bg-[#B4F461]','text-black')
    historyBtn.classList.add('border-2' ,'border-[#111111B3]','text-[#111111B3]')

})

// donation handles all

// noakhali
noakhaliBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('noakhali-input-value');
    const noakhaliBalance = getBalance('noakhali-balance')
    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    calculate(inputAmount,myBalance,noakhaliBalance,'noakhali-balance',noakhaliTitle);

})


// feni
feniBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('feni-input-value');
    const feniBalance = getBalance('feni-balance')
    const feniTitle = document.getElementById('feni-title').innerText;

    calculate(inputAmount,myBalance,feniBalance,'feni-balance',feniTitle);

})


// quota
quotaBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('quota-input-value');
    const quotaBalance = getBalance('quota-balance')
    const quotaTitle = document.getElementById('quota-title').innerText;

    calculate(inputAmount,myBalance,quotaBalance,'quota-balance',quotaTitle);

})



// const historyButton = document.getElementById('btn-history');
// const donationButton = document.getElementById('btn-donation');

// // Button for different sections

// const noakhaliButton = document.getElementById('button-noakhali');
// const feniButton = document.getElementById('button-feni');
// const quotaButton = document.getElementById('button-quota');

// //  Toogle sections

// const donationSection = document.getElementById('donation-section');
// const historySection = document.getElementById('history-section');


// // Click handlers 

// // History  add remove

// historyButton.addEventListener('click', function(){
//     donationSection.classList.add('hidden');
//     historySection.classList.add('hidden');

//     donationButton.classList.add('bg-[#4ADE80]', 'text-black');
//     donationButton.classList.remove('border-3', 'border-gray', 'text-gray');

//     historyButton.classList.remove('bg-[#4ADE80]', 'text-black');
//     historyButton.classList.add('border-3', 'border-gray', 'text-gray')
// });

// // donation add remove

// donationButton.addEventListener('click', function(){
//     donationSection.classList.remove('hidden');
//     historySection.classList.add('hidden');

//     donationButton.classList.add('bg-[#4ADE80]', 'text-black');
//     donationButton.classList.remove('border-3', 'border-gray', 'text-gray');

//     historyButton.classList.remove('bg-[#4ADE80]', 'text-black');
//     historyButton.classList.add('border-3', 'border-gray', 'text-gray')
// })

// // Donation for all 3 locations/areas:

// noakhaliButton.addEventListener('click', function(){

//     const availableBalance = getBalanceById('available-balance');
//     const inputMoney = getInputValueByID('input-value-noakhali');
//     const noakhaliBalance = getBalanceById('available-balance-noakhali');
//     const noakhaliHeading = document.getElementById('noakhali-heading').innerText;

//     calculate(availableBalance, inputMoney, noakhaliBalance, 'available-balance-noakhali',noakhaliHeading);

// });

// feniButton.addEventListener('click', function(){

//     const availableBalance = getBalanceById('available-balance');
//     const inputMoney = getInputValueByID('input-value-feni');
//     const feniBalance = getBalanceById('available-balance-feni');
//     const feniHeading = document.getElementById('feni-heading').innerText;

//     calculate(availableBalance, inputMoney, feniBalance, 'available-balance-feni',feniHeading);

// });
// feniButton.addEventListener('click', function(){

//     const availableBalance = getBalanceById('available-balance');
//     const inputMoney = getInputValueByID('input-value-feni');
//     const feniBalance = getBalanceById('available-balance-feni');
//     const feniHeading = document.getElementById('feni-heading').innerText;

//     calculate(availableBalance, inputMoney, feniBalance, 'available-balance-feni',feniHeading);

// });

// quotaButton.addEventListener('click', function(){

//     const availableBalance = getBalanceById('available-balance');
//     const inputMoney = getInputValueByID('input-value-quota');
//     const quotaBalance = getBalanceById('available-balance-quota');
//     const quotaHeading = document.getElementById('quota-heading').innerText;

//     calculate(availableBalance, inputMoney, quotaBalance, 'available-balance-quota',quotaHeading);

// });

