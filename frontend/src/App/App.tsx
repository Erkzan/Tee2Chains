import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Button,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useEffect } from "react";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ResultModal from "../components/ResultModal/ResultModal";
import style from "./App.module.css";

function App() {
  const [unit, setUnit] = React.useState("m");
  const [gradient, setGradient] = React.useState("up");
  const [length, setLength] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [errorLength, setErrorLength] = React.useState(false);
  const [errorHeight, setErrorHeight] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [effectiveLength, setEffectiveLength] = React.useState("");
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  useEffect(() => {
    document.title = "Tee2Chains";
  });

  const handleUnitChange = (
    event: React.MouseEvent<HTMLElement>,
    newUnit: string
  ) => {
    setUnit(newUnit);
    setUnit(newUnit === "m" ? "m" : "ft");
  };

  const handleGradientChange = (
    event: React.MouseEvent<HTMLElement>,
    newGradient: string
  ) => {
    setGradient(newGradient);
    setGradient(newGradient === "up" ? "up" : "down");
  };

  const checkGradient = () => {
    if (gradient === "down") {
      return true;
    } else {
      return false;
    }
  };

  const handleClear = () => {
    setLength("");
    setHeight("");
  };

  const handleCalculate = async () => {
    if (length === "" || height === "") {
      setErrorText("Please enter length and height difference.");
      setError(true);
      return;
    }

    if (
      (unit === "ft" && (Number(length) > 2000 || Number(height) > 165)) ||
      (unit === "m" && (Number(length) > 610 || Number(height) > 50))
    ) {
      if (unit === "ft") {
        setErrorText(
          "Values out of range. Length: 0-2000 ft, Height: 0-165 ft"
        );
      } else {
        setErrorText("Values out of range. Length: 0-610 m, Height: 0-50 m");
      }
      setError(true);
      return;
    }

    if (Number(length) <= Number(height)) {
      setErrorText("Length must be greater than the height difference.");
      setError(true);
      return;
    }
    const baseUrl = process.env.REACT_APP_BASE_URL;

    try {
      if (checkGradient()) {
        const response = await fetch(
          `${baseUrl}/calcEffectiveLength?length=${length}&height=${-height}`
        );
        const data = await response.json();
        setEffectiveLength(data.result);
      } else {
        const response = await fetch(
          `${baseUrl}/calcEffectiveLength?length=${length}&height=${height}`
        );
        const data = await response.json();
        setEffectiveLength(data.result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setOpen(true);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setErrorLength(false);
      setLength(value);
    } else {
      setErrorLength(true);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setErrorHeight(false);
      setHeight(value);
    } else {
      setErrorHeight(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleErrorClose = () => {
    setError(false);
  };

  return (
    <div>
      <Header />
      <div className={style.body}>
        {/*Break out, within as well*/}
        <div className={style.calc}>
          <div className={style.first}>
            <TextField
              variant="outlined"
              error={errorLength}
              label="Length"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">{unit}</InputAdornment>
                  ),
                },
              }}
              className={style.length}
              onChange={handleLengthChange}
              value={length}
              helperText={
                errorLength
                  ? "Enter a numeric value"
                  : "Enter the hole's length"
              }
            />
            <ToggleButtonGroup
              color="primary"
              value={unit}
              exclusive
              onChange={handleUnitChange}
              aria-label="Measurement unit"
              className={style.unit}
            >
              <ToggleButton value="m">m</ToggleButton>
              <ToggleButton value="ft">ft</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className={style.second}>
            <TextField
              label="Height Difference"
              error={errorHeight}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">{unit}</InputAdornment>
                  ),
                },
              }}
              variant="outlined"
              className={style.height}
              onChange={handleHeightChange}
              value={height}
              helperText={
                errorHeight
                  ? "Enter a numeric value"
                  : "Enter the hole's height difference"
              }
            />
            <ToggleButtonGroup
              color="primary"
              value={gradient}
              exclusive
              onChange={handleGradientChange}
              aria-label="Gradient"
              className={style.gradient}
            >
              <ToggleButton value="up">
                <ArrowUpwardIcon fontSize="small" />
              </ToggleButton>
              <ToggleButton value="down">
                <ArrowDownwardIcon fontSize="small" />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={style.buttons}>
            <Button
              className={style.button}
              variant="contained"
              onClick={handleCalculate}
            >
              Calculate
            </Button>
            <Button
              className={style.button}
              variant="outlined"
              color="error"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>
          <ResultModal
            onClose={handleClose}
            open={open}
            effectiveLength={Number(effectiveLength)}
            unit={unit}
          />
          <ErrorModal
            open={error}
            onClose={handleErrorClose}
            errorText={errorText}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
