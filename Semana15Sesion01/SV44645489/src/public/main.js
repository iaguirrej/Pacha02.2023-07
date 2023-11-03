import { init, appendChat, renderChats, fillForm, registerUser, uiChat, onHandleSubmit, onHandleSubmitUser } from "./ui.js";
import { loadChats, onNewChat, onSelected } from "./sockets.js";

// Load initial Chats
window.addEventListener("DOMContentLoaded", () => {   
  const logged= init()
  if(logged)
  {
    uiChat()
    loadChats(renderChats);
    onNewChat(appendChat);
    onSelected(fillForm);
  }
  else{
    registerUser()
  }
  
});

// Save a new Chat
const chatForm = document.querySelector("#chatForm");
chatForm.addEventListener("submit", onHandleSubmit);

// Save a new User
const userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", onHandleSubmitUser);
