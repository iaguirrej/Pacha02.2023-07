const socket = io.connect();

/**
 * create a new chat
 * @param {string} message a title for a new chat
 * @param {string} user a description for a new chat
 */
export const saveChat = (message, user) => {
  socket.emit("client:newChat", {
    message,
    user,
  });
};

/**
 * delete a chat based on an Id
 * @param {string} id a chat ID
 */
export const deleteChat = (id) => {
  socket.emit("client:deleteChat", id);
};

/**
 *
 * @param {string} _id chat ID
 * @param {string} message chat title
 * @param {string} user chat description
 */
export const updateChat = (_id, message, user) => {
  socket.emit("client:updateChat", {
    _id,
    message,
    user,
  });
};

/**
 * Load an Array of Chats
 * @param {function} callback A function to render Chats
 */
export const loadChats = (callback) => {
  socket.on("server:loadChats", callback);
};

export const onNewChat = (callback) => {
  socket.on("server:newChat", callback);
};

export const onSelected = (callback) => {
  socket.on("server:selectedChat", callback);
};

export const getChatById = (chatId) => {
  socket.emit("client:getChat", chatId);
};


export const updateUser = (_id, user) => {
  socket.emit("client:updateUser", {
    _id,
    user,
  });
};

export const saveUser = (user) => {
  socket.emit("client:newUser", {
    user,
  });
};