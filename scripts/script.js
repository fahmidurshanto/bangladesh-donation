function updateTime() {
  const currentDateTime = new Date();
  const timeString = currentDateTime.toString();
  document.getElementById("current-time").innerText = timeString;
}
