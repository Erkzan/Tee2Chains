import GitHubIcon from "@mui/icons-material/GitHub";
import style from "./Footer.module.css";
function Footer() {
  return (
    <div className={style.body}>
      <div
        className={style.container}
        onClick={() => window.open("https://github.com/Erkzan")}
      >
        <p className={style.createdBy}>Created by Erik Karlsson</p>
        <div className={style.icon}>
          <GitHubIcon className={style.icon} fontSize="large" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
