import HelpIcon from "@mui/icons-material/Help";
import logo from "../../assets/images/logo.png";
import style from "./Header.module.css";
import React from "react";
import HelperModal from "../HelperModal/HelperModal";

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src={logo} alt="logo" />
        <HelpIcon className={style.helpIcon} onClick={handleOpen}/>
      </div>
      <HelperModal open={open} onClose={handleClose} />
    </header>
  );
}

export default Header;
