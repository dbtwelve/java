const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"; 

function onLogoutSubmit(event) {
  event.preventDefault(); 
  console.log("Logout button clicked", event);
  logout.classList.add(HIDDEN_CLASSNAME); 
  localStorage.removeItem(USERNAME_KEY); 
  paintGreeting(); 
}

function onLoginSubmit(event) {
  event.preventDefault(); 
  loginForm.classList.add(HIDDEN_CLASSNAME); 
  localStorage.setItem(USERNAME_KEY, loginInput.value); 
  paintGreeting(); 
}

loginForm.addEventListener("submit", onLoginSubmit);
logout.addEventListener("submit", onLogoutSubmit);

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY); 
  console.log("paintGreeting", username);
  if (username === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    greeting.classList.add(HIDDEN_CLASSNAME);
    return;
  }
  greeting.innerText = `Hello ${username}`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); 
if (savedUsername === null) {
  // If no username is found in local storage
  loginForm.classList.remove(HIDDEN_CLASSNAME); 
}
else {
  paintGreeting(); 
}