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

historyButton.addEventListener('click', function(){
    donationSection.classList.add('hidden');
    historySection.classList.add('hidden');

    donationButton.classList.add('bg-[##4ADE80]', 'text-black');
    donationButton.classList.remove('border-3', 'border-gray', 'text-gray');

    historyButton.classList.remove('bg-[##4ADE80]', 'text-black');
    historyButton.classList.add('border-3', 'border-gray', 'text-gray')
});


donationButton.addEventListener('click', function(){
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');

    donationButton.classList.add()
})

// Donation for all 3 sections:

noakhaliButton

