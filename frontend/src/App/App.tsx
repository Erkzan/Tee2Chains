import {
  Button,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import ResultModal from "../components/ResultModal/ResultModal";
import style from "./App.module.css";
import logo from "../images/logo.png";

function App() {
  const [alignment, setAlignment] = React.useState("m");
  const [unit, setUnit] = React.useState("m");
  const [length, setLength] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [errorLength, setErrorLength] = React.useState(false);
  const [errorHeight, setErrorHeight] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [holeLength, setHoleLength] = React.useState("");
  const [effectiveLength, setEffectiveLength] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    setUnit(newAlignment === "m" ? "m" : "ft"); // Example logic to change unit
  };

  const handleClear = () => {
    setLength("");
    setHeight("");
  };

  const handleCalculate = async () => {
    if (length === "" || height === "") {
      setError(true);
      return;
    }
    const baseUrl = process.env.REACT_APP_BASE_URL;
    try {
      const response = await fetch(
        `${baseUrl}/calcHoleLength?length=${length}&height=${height}`
      );
      const data = await response.json();
      setHoleLength(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response = await fetch(
        `${baseUrl}/calcEffectiveLength?length=${length}&height=${height}`
      );
      const data = await response.json();
      setEffectiveLength(data.result);
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
    if (/^-?\d*\.?\d*$/.test(value)) {
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
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div className={style.body}>
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
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Measurement unit"
              className={style.unit}
            >
              <ToggleButton value="m">m</ToggleButton>
              <ToggleButton value="ft">ft</ToggleButton>
            </ToggleButtonGroup>
          </div>

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
          <div className={style.buttons}>
            <Button
              className={style.calcButton}
              variant="contained"
              onClick={handleCalculate}
            >
              Calculate
            </Button>
            <Button
              className={style.clearButton}
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
            holeLength={Number(holeLength)}
            effectiveLength={Number(effectiveLength)}
            unit={unit}
          />
          <ErrorModal open={error} onClose={handleErrorClose} />
        </div>
      </div>
    </div>
  );
}

export default App;
