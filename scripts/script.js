function updateTime() {
  const currentDateTime = new Date();
  const timeString = currentDateTime.toString();
  document.getElementById("current-time").innerText = timeString;
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