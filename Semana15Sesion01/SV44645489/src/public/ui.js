import { deleteChat, getChatById, saveChat, updateChat,saveUser, updateUser } from "./sockets.js";


const chatsList = document.querySelector("#chats");
const message = document.querySelector("#message");
const user = document.querySelector("#user");

let savedId = "";

const chatUI = (chat) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
      <div class="d-flex justify-content-between">
          <h1 class="card-title h3">${chat.user}</h1>
          <div>
              <button class="btn btn-danger delete" data-id="${chat._id}">delete</button>
              <button class="btn btn-secondary update" data-id="${chat._id}">update</button>
          </div>
      </div>
      <p>${chat.message}</p>
  </div>
`;
  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");

  btnDelete.addEventListener("click", () => deleteChat(btnDelete.dataset.id));
  btnUpdate.addEventListener("click", () => getChatById(btnDelete.dataset.id));

  return div;
};

export const registerUser = () =>{

  const div = document.getElementById("ui");
  
  div.innerHTML = `
  
    <form id="userForm" class="card card-body rounded-0">
      <h1 class="h3 mb-5">Usuario</h1>
      <input
        id="user"
        type="text"
        name="user"
        placeholder="Usuario"
        class="form-control rounded-0 mb-3"
        autofocus
      />
      <button class="btn btn-dark rounded-0">Iniciar chat</button>
    </form>
  
`
}

export const uiChat = () =>{

  const div = document.getElementById("ui");
  div.innerHTML = `
                  <div class="col-md-4 my-auto">
                    <form id="chatForm" class="card card-body rounded-0">
                      <h1 class="h3 mb-5">Chat</h1>
                      <input
                        id="user"
                        type="text"
                        name="user"
                        placeholder="Usuario"
                        class="form-control rounded-0 mb-3"
                        autofocus
                      />

                      <textarea
                        name="message"
                        id="message"
                        rows="2"
                        placeholder="Mensaje"
                        class="form-control rounded-0 mb-3"
                      ></textarea>
                      <button class="btn btn-dark rounded-0">Enviar</button>
                    </form>
                  </div>
                  <div class="col-md-8 py-3" id="chats"></div>
  `
}

export const init =() =>{
  const user = localStorage.getItem('user')
  if(user=='' || user==undefined)
  {
    return false
  }
  else{
    return true
  }
}

export const renderChats = (chats) => {
  savedId = "";
  chatsList.innerHTML = "";
  chats.forEach((chat) => chatsList.append(chatUI(chat)));
};

export const appendChat = (chat) => {
  chatsList.append(chatUI(chat));
};

export const fillForm = (chat) => {
  message.value = chat.message;
  user.value = chat.user;

  savedId = chat._id;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  if (savedId) {
    updateChat(savedId, message.value, user.value);
  } else {
    saveChat(message.value, user.value);
  }

  message.value = "";
  user.value = "";
};

export const onHandleSubmitUser = (e) => {
  e.preventDefault();
  if (savedId) {
    updateUser(savedId, user.value);
  } else {
    saveUser(user.value);
  }

  user.value = "";
};
