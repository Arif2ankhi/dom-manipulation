// Toggle buttons

const historyButton = document.getElementById('btn-history');
const donationButton = document.getElementById('btn-donation');

// Button for different sections

const noakhaliButton = document.getElementById('button-noakhali');
const feniButton = document.getElementById('button-feni');
const quotaButton = document.getElementById('button-quota');

//  Toogle sections

const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');


// Click handlers 

// History  add remove

historyButton.addEventListener('click', function(){
    donationSection.classList.add('hidden');
    historySection.classList.add('hidden');

    donationButton.classList.add('bg-[#4ADE80]', 'text-black');
    donationButton.classList.remove('border-3', 'border-gray', 'text-gray');

    historyButton.classList.remove('bg-[#4ADE80]', 'text-black');
    historyButton.classList.add('border-3', 'border-gray', 'text-gray')
});

// donation add remove

donationButton.addEventListener('click', function(){
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');

    donationButton.classList.add('bg-[#4ADE80]', 'text-black');
    donationButton.classList.remove('border-3', 'border-gray', 'text-gray');

    historyButton.classList.remove('bg-[#4ADE80]', 'text-black');
    historyButton.classList.add('border-3', 'border-gray', 'text-gray')
})

// Donation for all 3 locations/areas:

noakhaliButton.addEventListener('click', function(){

    const availableBalance = getBalanceById('available-balance');
    const inputMoney = getInputValueByID('input-value-noakhali');
    const noakhaliBalance = getBalanceById('available-balance-noakhali');
    const noakhaliHeading = document.getElementById('noakhali-heading').innerText;

    calculate(availableBalance, inputMoney, noakhaliBalance, 'available-balance-noakhali',noakhaliHeading);

});

feniButton.addEventListener('click', function(){

    const availableBalance = getBalanceById('available-balance');
    const inputMoney = getInputValueByID('input-value-feni');
    const feniBalance = getBalanceById('available-balance-feni');
    const feniHeading = document.getElementById('feni-heading').innerText;

    calculate(availableBalance, inputMoney, feniBalance, 'available-balance-feni',feniHeading);

});
feniButton.addEventListener('click', function(){

    const availableBalance = getBalanceById('available-balance');
    const inputMoney = getInputValueByID('input-value-feni');
    const feniBalance = getBalanceById('available-balance-feni');
    const feniHeading = document.getElementById('feni-heading').innerText;

    calculate(availableBalance, inputMoney, feniBalance, 'available-balance-feni',feniHeading);

});

quotaButton.addEventListener('click', function(){

    const availableBalance = getBalanceById('available-balance');
    const inputMoney = getInputValueByID('input-value-quota');
    const quotaBalance = getBalanceById('available-balance-quota');
    const quotaHeading = document.getElementById('quota-heading').innerText;

    calculate(availableBalance, inputMoney, quotaBalance, 'available-balance-quota',quotaHeading);

});

