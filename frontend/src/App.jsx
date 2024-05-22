import React, { useEffect, useState } from 'react';
import './App.css';
import './RouletteAndBall.css';
import Header from './Header.jsx';
import Roulette from "./assets/Roulette.svg";
import BetTable from './BetTable.jsx';
import Ball from "./assets/Ball.svg";
import BgColorRed from "./assets/BgColorRed.svg";
import BgColorGreen from "./assets/BgColorGreen.svg";

function App() {
  const [result, setResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [spinCount, setSpinCount] = useState(1080);
  const [money, setMoney] = useState(1500);
  const [bet, setBet] = useState([]);
  const [anglesArray, setAnglesArray] = useState([
    1080, 1440, 1800, 2160
  ]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function getRandomAngleFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  function betResults (color, res) {
    console.log(color);
    console.log(res);
    for (let pot of bet) {
      console.log('pot.type: ' + pot.type + ' pot.value: ' + pot.value + ' pot.betCost: ' + pot.betCost);
      switch (pot.type) {
        case "number": 
          if (pot.value == result) {
            setMoney(current => current + (pot.betCost * 36));
          };
          break;
        case "odd":
          if ([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35].includes(res)) {
            console.log(res + ' is odd');
            setMoney(current => current + (pot.betCost * 2));
          };
          break;
        case "even":
          if ([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36].includes(res)) {
            console.log(res + ' is even');
            setMoney(current => current + (pot.betCost * 2));
          };
          break;          
        case "red":
          if (color == "#7A1414") {
            setMoney(current => current + (pot.betCost * 2));
          };
          break;
        case "black":
          if (color == "#000000") {
            setMoney(current => current + (pot.betCost * 2));
          };
          break;
        case "1-18":
          if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].includes(res)) {
            setMoney(current => current + (pot.betCost * 2));
          };
          break;
        case "19-36":
          if ([19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].includes(res)) {
            setMoney(current => current + (pot.betCost * 2));
          };
          break;
        case "1st12":
          if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(res)) {
            setMoney(current => current + (pot.betCost * 3));
          };
          break;
        case "2nd12":
          if ([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].includes(res)) {
            setMoney(current => current + (pot.betCost * 3));
          };
          break;
        case "3rd12":
          if ([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].includes(res)) {
            setMoney(current => current + (pot.betCost * 3));
          };
          break;
        case "1stCol":
          if ([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].includes(res)) {
            setMoney(current => current + (pot.betCost * 3));
          };
          break;
        case "2ndCol":
          if ([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].includes(res)) {
            setMoney(current => current + (pot.betCost * 3));
          };
          break;
        case "3rdCol":
          if ([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].includes(res)) {
            setMoney(current => current + (pot.betCost * 3));
          };
          break;
        default: 
            pot.delete();
          break;
      }
    }
  };

  function setRes(res) {
    let color = "";
    // const anglesArray = Array.from({ length: 100 }, (_, index) => (index + 1) * 360);
    const randomAngle = getRandomAngleFromArray(anglesArray);
    setSpinCount(spinCount + randomAngle);
    switch (res) {
      case 0:
        setRotationAngle(String(spinCount + 9.47 * 2) + "deg");
        color = "#156108";
        break;
      case 28:
        setRotationAngle(String(spinCount + 9.47 * 1) + "deg");
        color = "#000000";
        break;
      case 9:
        setRotationAngle(String(spinCount + 9.47 * 0) + "deg");
        color = "#7A1414";
        break;
      case 26:
        setRotationAngle(String(spinCount + 9.47 * 37) + "deg");
        color = "#000000";
        break;
      case 30:
        setRotationAngle(String(spinCount + 9.47 * 36) + "deg");
        color = "#7A1414";
        break;
      case 11:
        setRotationAngle(String(spinCount + 9.47 * 35) + "deg");
        color = "#000000";
        break;
      case 7:
        setRotationAngle(String(spinCount + 9.47 * 34) + "deg");
        color = "#7A1414";
        break;
      case 20:
        setRotationAngle(String(spinCount + 9.47 * 33) + "deg");
        color = "#000000";
        break;
      case 32:
        setRotationAngle(String(spinCount + 9.47 * 32) + "deg");
        color = "#7A1414";
        break;
      case 17:
        setRotationAngle(String(spinCount + 9.47 * 31) + "deg");
        color = "#000000";
        break;
      case 5:
        setRotationAngle(String(spinCount + 9.47 * 30) + "deg");
        color = "#7A1414";
        break;
      case 22:
        setRotationAngle(String(spinCount + 9.47 * 29) + "deg");
        color = "#000000";
        break;
      case 34:
        setRotationAngle(String(spinCount + 9.47 * 28) + "deg");
        color = "#7A1414";
        break;
      case 15:
        setRotationAngle(String(spinCount + 9.47 * 27) + "deg");
        color = "#000000";
        break;
      case 3:
        setRotationAngle(String(spinCount + 9.47 * 26) + "deg");
        color = "#7A1414";
        break;
      case 24:
        setRotationAngle(String(spinCount + 9.47 * 25) + "deg");
        color = "#000000";
        break;
      case 36:
        setRotationAngle(String(spinCount + 9.47 * 24) + "deg");
        color = "#7A1414";
        break;
      case 13:
        setRotationAngle(String(spinCount + 9.47 * 23) + "deg");
        color = "#000000";
        break;
      case 1:
        setRotationAngle(String(spinCount + 9.47 * 22) + "deg");
        color = "#7A1414";
        break;
      case 37:
        setRotationAngle(String(spinCount + 9.47 * 21) + "deg");
        color = "#156108";
        setResult("00");
        res = "00";
        break;
      case 27:
        setRotationAngle(String(spinCount + 9.47 * 20) + "deg");
        color = "#7A1414";
        break;
      case 10:
        setRotationAngle(String(spinCount + 9.47 * 19) + "deg");
        color = "#000000";
        break;
      case 25:
        setRotationAngle(String(spinCount + 9.47 * 18) + "deg");
        color = "#7A1414";
        break;
      case 29:
        setRotationAngle(String(spinCount + 9.47 * 17) + "deg");
        color = "#000000";
        break;
      case 12:
        setRotationAngle(String(spinCount + 9.47 * 16) + "deg");
        color = "#7A1414";
        break;
      case 8:
        setRotationAngle(String(spinCount + 9.47 * 15) + "deg");
        color = "#000000";
        break;
      case 19:
        setRotationAngle(String(spinCount + 9.47 * 14) + "deg");
        color = "#7A1414";
        break;
      case 31:
        setRotationAngle(String(spinCount + 9.47 * 13) + "deg");
        color = "#000000";
        break;
      case 18:
        setRotationAngle(String(spinCount + 9.47 * 12) + "deg");
        color = "#7A1414";
        break;
      case 6:
        setRotationAngle(String(spinCount + 9.47 * 11) + "deg");
        color = "#000000";
        break;
      case 21:
        setRotationAngle(String(spinCount + 9.47 * 10) + "deg");
        color = "#7A1414";
        break;
      case 33:
        setRotationAngle(String(spinCount + 9.47 * 9) + "deg");
        color = "#000000";
        break;
      case 16:
        setRotationAngle(String(spinCount + 9.47 * 8) + "deg");
        color = "#7A1414";
        break;
      case 4:
        setRotationAngle(String(spinCount + 9.47 * 7) + "deg");
        color = "#000000";
        break;
      case 23:
        setRotationAngle(String(spinCount + 9.47 * 6) + "deg");
        color = "#7A1414";
        break;
      case 35:
        setRotationAngle(String(spinCount + 9.47 * 5) + "deg");
        color = "#000000";
        break;
      case 14:
        setRotationAngle(String(spinCount + 9.47 * 4) + "deg");
        color = "#7A1414";
        break;
      case 2:
        setRotationAngle(String(spinCount + 9.47 * 3) + "deg");
        color = "#000000";
        break;
      default:
        setRotationAngle("18.94deg");
        color = "#000000";
    };
    return color;
  };

  function spin() {
    setIsSpinning(true);

    let randomNumber = getRandomNumber(0, 37);
    // randomNumber = 37;
    setRes(randomNumber);
    const color = setRes(randomNumber);
    
    setTimeout(() => {
      if (randomNumber == 37) {randomNumber = "00"};
      betResults(color, randomNumber);
      setResult(randomNumber);
      document.getElementById('resultBall').style.backgroundColor = color;
      setIsSpinning(false);
      setBet([]);
    }, 7000);
  }

  return (
    <>
      <Header money={money} />
      <div className="result">
        <div id="resultBall">{result !== null ? result : '-'}</div>
        <div id="resultTxt">результат</div>
        <button id="spinBtn" onClick={spin} disabled={isSpinning}>
          {isSpinning ? 'Крутится...' : 'Крутить'}
        </button>
      </div>
      <img
        id="ball"
        src={Ball}
        alt=""
      />
      <img
        id="roulette"
        src={Roulette}
        alt=""
        style={{ transform: `rotate(${rotationAngle})` }}
      />
      <BetTable refresh={!isSpinning} money={money} blocked={isSpinning} setBet={(allBets, moneyNew)=>{setBet(allBets); setMoney(moneyNew); console.log(allBets)}} setMoney={setMoney}/>
      <img id="BgColorRed" src={BgColorRed} alt="" />
      <img id="BgColorGreen" src={BgColorGreen} alt="" />
    </>
  );
}

export default App;
