import { BsPersonFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import styles from "./Header.module.css";

function Header({ backButton }) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      {backButton ? (
        <IconButton
          onClick={() => {
            navigate(backButton);
          }}
        >
          <AiOutlineArrowLeft className={styles.header_icon} fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <BsPersonFill className={styles.header_icon} fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img src={logo} alt="logo tinder" />
      </Link>

      <Link to="/chat">
        <IconButton>
          <IoMdChatboxes fontSize="large" className={styles.header_icon} />
        </IconButton>
      </Link>
    </div>
  );
}
export default Header;
