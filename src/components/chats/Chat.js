import styles from "./Chat.module.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className={styles.chat}>
        <Avatar className={styles.chat_image} src={profilePic} />
        <div className={styles.chat_details}>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p>{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
