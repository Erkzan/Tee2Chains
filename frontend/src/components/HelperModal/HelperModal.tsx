import { Modal } from "@mui/material";
import style from "./HelperModal.module.css";

interface HelperModalProps {
  open: boolean;
  onClose: () => void;
}

function HelperModal(props: HelperModalProps) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className={style.body}>
        <div className={style.helpHeader}>
          <h1>How to use</h1>
          <h4>
            This application calculates the effective length of a discgolf hole.
          </h4>
        </div>
        <div className={style.helpText}>
          <h3>Step 1</h3>
          <p>
            Enter the hole's length and height difference in the corresponding
            inputfields.
          </p>
          <h3>Step 2</h3>
          <p>
            To the right of each inputfield there is a button. You can use the
            first one to toggle between meters (M) and feet (FT) if you want to
            change the unit of measurement. The second button will change
            weather the hole is uphill or downhill, which will affect the
            effective length of the hole.
          </p>
          <h3>Step 3</h3>
          <p>
            Press the "Calculate" button to get the effective length of the
            hole.
          </p>
          <div className={style.refer}>
            <p>Calculations are based on <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pdga.com/course-development/skill-level-guidelines"
            >
              PDGA Course Design Player Skill Level Guidelines
            </a>.</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default HelperModal;
