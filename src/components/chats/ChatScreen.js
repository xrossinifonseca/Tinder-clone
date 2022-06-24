import { Avatar } from "@mui/material";
import { useState } from "react";
import styles from "../chats/ChatScreen.module.css";
import Header from "../Header";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Zendaya",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPp7UQ5G0rhPhv6YmpJaW_10JHbxI7sdzcYIEQGTrVPxhBcxV9",
      message: "Ola!",
    },
    {
      name: "Zendaya",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPp7UQ5G0rhPhv6YmpJaW_10JHbxI7sdzcYIEQGTrVPxhBcxV9",
      message: " Tudo bem?!",
    },
    {
      message: "tudo bem!",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className={styles.screen}>
      <Header backButton="/chat" />
      <p className={styles.screenText}>
        VOCÊ DEU UM MATCH COM ZENDAYA NO DIA 23/06/22
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className={styles.chatscreen_message}>
            <Avatar
              className={styles.chat_image}
              alt={message.name}
              src={message.image}
            />
            <p className={styles.chatscreen_details}>{message.message}</p>
          </div>
        ) : (
          <div className={styles.chatscreen_message}>
            <p className={styles.chatscreen_detailsUser}>{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className={styles.screen_form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escreva aqui uma menssagem"
            type="text"
            className={styles.screen_inputFild}
          />
          <button
            onClick={handleSend}
            type="submit"
            className={styles.screen_inputButton}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
export default ChatScreen;
