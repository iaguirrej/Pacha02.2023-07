import Chat from "./models/Chat";

export default (io) => {
    io.on("connection", (socket) => {
      // console.log(socket.handshake.url);
      console.log("nuevo socket connectado:", socket.id);
  
      // Send all messages to the client
      const emitChats = async () => {
        const chats = await Chat.find();
        socket.emit("server:loadChats", chats);
      };
      emitChats();
  
      socket.on("client:newChat", async (data) => {
        const newChat = new Chat(data);
        const savedChat = await newChat.save();
        io.emit("server:newChat", savedChat);
      });
  
      socket.on("client:deleteChat", async (chatId) => {
        await Chat.findByIdAndDelete(chatId);
        emitChats();
      });
  
      socket.on("client:getChat", async (chatId) => {
        const chat = await Chat.findById(chatId);
        socket.emit("server:selectedChat", chat);
      });
  
      socket.on("client:updateChat", async (updatedChat) => {
        await Chat.findByIdAndUpdate(updatedChat._id, {
          message: updatedChat.message,
          user: updatedChat.user,
        });
        emitChats();
      });
  
      socket.on("disconnect", () => {
        console.log(socket.id, "disconnected");
      });
    });
  };
  