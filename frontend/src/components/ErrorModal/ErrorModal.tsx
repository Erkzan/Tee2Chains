import { Modal } from "@mui/material";
import style from "./ErrorModal.module.css";
interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
}
function ErrorModal(props: ErrorModalProps) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className={style.box}>
        <h1>Invalid input</h1>
        <p>Please enter the length and height difference for the hole!</p>
      </div>
    </Modal>
  );
}
export default ErrorModal;
