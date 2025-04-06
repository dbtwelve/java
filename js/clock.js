const clock = document.getElementById("clock"); // Select the clock element

function getClock() {
  const date = new Date(); // Get the current date and time
  const hours = String(date.getHours()).padStart(2, "0"); // Get hours and pad with leading zero
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Get minutes and pad with leading zero
  const seconds = String(date.getSeconds()).padStart(2, "0"); // Get seconds and pad with leading zero
  clock.innerText = `${hours}:${minutes}:${seconds}`; // Update the clock element with the formatted time
}

getClock(); // Call getClock immediately to set the initial time
setInterval(getClock, 1000); // Call getClock every second to update the time
