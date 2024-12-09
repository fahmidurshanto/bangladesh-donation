// Reusable function to get the current date and time
function updateTime() {
  const currentDateTime = new Date();
  const timeString = currentDateTime.toString();
  return document.getElementById("current-time").innerText = timeString;
}


// Donation button function
document.getElementById('donation-btn').addEventListener("click", function (){
    document.getElementById("donation-card-container").classList.remove("hidden");
    document.getElementById("history-container").classList.add("hidden");
})
// history button function
document.getElementById("history-btn").addEventListener('click', function(){
    document.getElementById("history-container").classList.remove("hidden");
    document.getElementById("donation-card-container").classList.add("hidden");
})

// Noakhali donation function
document.getElementById("noakhali-donation").addEventListener("click" , function(){
  const newDonationInputField = document.getElementById("donation-input");
  const newDonationString = newDonationInputField.value;
  const newDonation = parseFloat(newDonationString);
  const newDonationAmountField = document.getElementById("noakhali-donation-amount");
  const donationAmountString = newDonationAmountField.innerText;
  const donationAmount = parseFloat(donationAmountString);
  const userAmountField = document.getElementById('user-amount')
  const userAmountString = userAmountField.innerText;
  const userAmount = parseFloat(userAmountString);

  if (isNaN(newDonation)) {
    alert("Invalid input. Please enter a valid number.");
    newDonationInputField.value = '';
  }
  
  else if(userAmount < newDonation){
    alert("insufficient Balance");
    newDonationInputField.value = ''
  }
  else{
    newDonationAmountField.innerText = donationAmount + newDonation;
    userAmountField.innerText = userAmount - newDonation;
    addHistory(newDonation.toFixed(2), "Flood Relief in Noakhali");
    document.getElementById("noakhali-donation-success").innerText = `You Have Donated for Humankind`;
    my_modal_1.showModal();
    newDonationInputField.value = ''
  }
})


// Feni donation function
document.getElementById("feni-donation").addEventListener("click" , function(){
  const newDonationInputField = document.getElementById("feni-donation-input");
  const newDonationString = newDonationInputField.value;
  const newDonation = parseFloat(newDonationString);
  const newDonationAmountField = document.getElementById("feni-donation-amount");
  const donationAmountString = newDonationAmountField.innerText;
  const donationAmount = parseFloat(donationAmountString);
  const userAmountField = document.getElementById('user-amount')
  const userAmountString = userAmountField.innerText;
  const userAmount = parseFloat(userAmountString);

  if (isNaN(newDonation)) {
    alert("Invalid input. Please enter a valid number.");
    newDonationInputField.value = ''
  }
  else if(userAmount < newDonation){
    alert("insufficient Balance");
    newDonationInputField.value = '';
  }
  else{
    newDonationAmountField.innerText = donationAmount + newDonation;
    userAmountField.innerText = userAmount - newDonation;
    addHistory(newDonation.toFixed(2), "Flood Relief in Feni");
    document.getElementById("feni-donation-success").innerText = `You Have Donated for Humankind`;
    my_modal_2.showModal();
    newDonationInputField.value = "";
  }
})


// Injured in the Quota Movement donation function
document.getElementById("quota-donation").addEventListener("click" , function(){
  const newDonationInputField = document.getElementById("quota-donation-input");
  const newDonationString = newDonationInputField.value;
  const newDonation = parseFloat(newDonationString);
  const newDonationAmountField = document.getElementById("quota-donation-amount");
  const donationAmountString = newDonationAmountField.innerText;
  const donationAmount = parseFloat(donationAmountString);
  const userAmountField = document.getElementById('user-amount')
  const userAmountString = userAmountField.innerText;
  const userAmount = parseFloat(userAmountString);

  if (isNaN(newDonation)) {
    alert("Invalid input. Please enter a valid number.");
    newDonationInputField.value = "";
  }
  else if(userAmount < newDonation){
    alert("insufficient Balance");
    newDonationInputField.value = "";
  }
  else{
    newDonationAmountField.innerText = donationAmount + newDonation;
    userAmountField.innerText = userAmount - newDonation;
    addHistory(newDonation.toFixed(2), "Relief for injured students and people in the Quota Movement");
    document.getElementById("quota-donation-success").innerText = `You Have Donated for Humankind`;
    my_modal_3.showModal();
    newDonationInputField.value = "";
  }
})

// adding history to the history list function
function addHistory (donationAmount, donationName){
  const historyContainer = document.getElementById("history-container");

  // create a new history
  const historyCard = document.createElement("div");
  historyCard.classList.add("history-card", "space-y-5", "p-5", "m-4", "rounded-md", "shadow");

  // Donation Details
  const historyDetails = `
  <h3 class="font-bold">${donationAmount} BDT is Donated for ${donationName}</h3>
  <p><span class="font-bold">Date:</span> <span>${updateTime()}</span></p>
  `
  historyCard.innerHTML = historyDetails;

  historyContainer.appendChild(historyCard)
}



