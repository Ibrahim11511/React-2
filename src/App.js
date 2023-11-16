import React, { useState } from 'react'
import './App.css'
import Styles from "./app.module.css"

function App() {
  const [inchValue, getInchValue] = useState(0)
  const [meterValue, setMeterValue] = useState(0)
  const [currentInch, setCurrentInch] = useState(inchValue)

  const handleInputChange = (e) => {
    getInchValue(e.target.value)
  }

  const handleCalculate = () => {
    const inch = parseFloat(inchValue)
    const meter = inch * 0.0254
    setMeterValue(meter.toFixed(3))
    setCurrentInch(inchValue)
  }

  return (
    <>
      <div className={Styles.pageContainer}>
        <div className={Styles.container}>
          <h1 className="header">Inch-To-Meter Converter</h1>
          <div className="">
            <p className="label">Number of inches:</p>
            <input
              type="text"
              placeholder="Enter number of inches here.."
              className="inchs-input"
              value={inchValue}
              onChange={handleInputChange}
            />
            <button
              className="calc-btn"
              onClick={handleCalculate}>
              Calculate
            </button>
            <p className="result">{currentInch} Inches = {meterValue} Meters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;