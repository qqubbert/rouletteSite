import { useState, useEffect } from 'react';
import './BetTable.css';

export default function BetTable({ setBet, setMoney, blocked, money, refresh }) {
    const [allBets, setAllBets] = useState([]);
    const [currentBet, setCurrentBet] = useState(10);
    const [maxOutside, setMaxOutside] = useState(4);
    const [maxInside, setMaxInside] = useState(8);
    const [currentOutside, setCurrentOutside] = useState(0);
    const [currentInside, setCurrentInside] = useState(0);

    function Bet (type, value, cost) {
        this.type = type;
        this.value = value;
        this.betCost = cost;
    };

    const handleClick = (e) => {
        const target = e.currentTarget;

        if (target && !blocked) {
            const betSide = target.getAttribute('data-side');
            if (target.classList.contains('selected')) {
                target.classList.remove('selected');
                setAllBets(allBets.filter(bet => bet.value !== target.innerText));
                // money += allBets.filter(bet => bet.value == target.innerText)[0].betCost;
                let newMoney = money + allBets.filter(bet => bet.value == target.innerText)[0].betCost;
                setMoney(newMoney);
                if (betSide == "outside") {
                    setCurrentOutside(current => current - 1);
                } else if (betSide == "inside") {
                    setCurrentInside(current => current - 1);
                }
            } else {
                if (((betSide == "outside" && currentOutside < maxOutside) 
                    || (betSide == "inside" && currentInside < maxInside))
                    && money >= currentBet && currentBet > 0) {
                    target.classList.add('selected');
                    const betType = target.getAttribute('data-type');
                    const betValue = target.innerText;
                    const betCost = currentBet;
                    const newBet = new Bet(betType, betValue, betCost);
                    // money -= betCost;
                    let newMoney = money - betCost;
                    setAllBets([...allBets, newBet]);
                    setMoney(newMoney);
                    if (betSide == "outside") {
                        setCurrentOutside(current => current + 1);
                    } else if (betSide == "inside") {
                        setCurrentInside(current => current + 1);
                    }
                }
            };
            // setBet(allBets, money);
        }
    };

    useEffect(() => {
        setBet(allBets, money);
    }, [allBets, money, setBet]);

    useEffect(() => {
        setAllBets([]);
        setCurrentOutside(0);
        setCurrentInside(0);
        document.querySelectorAll('.betTable .selected').forEach(el => el.classList.remove('selected'));
    }, [refresh]);

    return (
        <>
            <label htmlFor="" id="betSize">Размер ставки: ${currentBet}
                <div id="betInput">
                    <label htmlFor="">$10</label>
                    <input 
                        type="range" 
                        min="10" 
                        max={money} 
                        value={currentBet} 
                        onChange={(e) => setCurrentBet(Number(e.target.value))}
                    />
                    <label htmlFor="">${money}</label>
                </div>
            </label>
            <table className="betTable">
                <tbody>
                    <tr>
                        <td colSpan="2" className="invisible"></td>
                        <td colSpan="3" className='RightTopCorner LeftTopCorner' data-type="number" data-side="inside" onClick={handleClick}>0</td>
                        <td colSpan="3" className='RightTopCorner LeftTopCorner' data-type="number" data-side="inside" onClick={handleClick}>00</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="side LeftTopCorner"  data-type="1-18" data-side="outside" onClick={handleClick}>1 - 18</td>
                        <td rowSpan="4" className="side"  data-type="1st12" data-side="outside" onClick={handleClick}>1st 12</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>1</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>2</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>3</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>4</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>5</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>6</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="side"  data-type="even" data-side="outside" onClick={handleClick}>even</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>7</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>8</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>9</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>10</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>11</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>12</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="red"  data-type="red" data-side="outside" onClick={handleClick}>   </td>
                        <td rowSpan="4" className="side"  data-type="2nd12" data-side="outside" onClick={handleClick}>2nd 12</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>13</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>14</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>15</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="red"  data-type="number" data-side="inside" onClick={handleClick}>16</td>
                        <td colSpan="2" className="black"  data-type="number" data-side="inside" onClick={handleClick}>17</td>
                        <td colSpan="2" className="red"  data-type="number" data-side="inside" onClick={handleClick}>18</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="black"  data-type="black" data-side="outside" onClick={handleClick}>   </td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>19</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>20</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>21</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>22</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>23</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>24</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="side"  data-type="odd" data-side="outside" onClick={handleClick}>odd</td>
                        <td rowSpan="4" className="side"  data-type="3rd12" data-side="outside" onClick={handleClick}>3rd 12</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>25</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>26</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>27</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>28</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>29</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>30</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="side LeftBottomCorner"  data-type="19-36" data-side="outside" onClick={handleClick}>19 - 36</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>31</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>32</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>33</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>34</td>
                        <td colSpan="2" className="black" data-type="number" data-side="inside" onClick={handleClick}>35</td>
                        <td colSpan="2" className="red" data-type="number" data-side="inside" onClick={handleClick}>36</td>
                    </tr>
                    <tr>
                        <td className="invisible"></td>
                        <td className="invisible"></td>
                        <td colSpan="2" className="LeftBottomCorner"  data-type="1stCol" data-side="outside" onClick={handleClick}>2 to 1</td>
                        <td colSpan="2"  data-type="2ndCol" data-side="outside" onClick={handleClick}>2 to 1</td>
                        <td colSpan="2" className="RightBottomCorner"  data-type="3rdCol" data-side="outside" onClick={handleClick}>2 to 1</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
