import { Modal } from "@mui/material";
import style from "./ResultModal.module.css";

interface ResultModalProps {
  open: boolean;
  effectiveLength: number | null;
  unit: string;
  onClose: () => void;
}

function ResultModal(props: ResultModalProps) {
  const { open, effectiveLength, unit, onClose } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <div className={style.box}>
        <p>The effective distance of the hole is:</p>
        <h1>{effectiveLength} {unit}</h1>
      </div>
    </Modal>
  );
}
export default ResultModal;
