import styles from "./SwipeButtons.module.css";
import { MdOutlineReplay } from "react-icons/md";
import { VscClose } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { IoMdFlash } from "react-icons/io";
import { IconButton } from "@mui/material";

function SwipeButtons() {
  return (
    <div className={styles.swipebutton}>
      <IconButton className={styles.button}>
        <MdOutlineReplay className={styles.replay} fontSize="large" />
      </IconButton>

      <IconButton className={styles.button}>
        <VscClose className={styles.close} fontSize="large" />
      </IconButton>

      <IconButton className={styles.button}>
        <AiFillStar className={styles.star} fontSize="large" />
      </IconButton>

      <IconButton className={styles.button}>
        <MdFavorite className={styles.heart} fontSize="large" />
      </IconButton>

      <IconButton className={styles.button}>
        <IoMdFlash className={styles.flash} fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
