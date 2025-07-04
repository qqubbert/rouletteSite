import Menu from "./assets/Menu.svg";
import "./Header.css"

export default function Header({ money, roulette, slot, poker, blackjack }) {
    return (
        <>
            <header>
                <div id="leftHeader">
                    {/* <img src={Menu} alt="" /> */}
                    <h2>Luck-Duck Casino</h2>
                </div>
                <h3 className="links" onClick={roulette}>Рулетка</h3>
                <h3 className="links" onClick={slot}>Слоты</h3>
                <h3 className="links" onClick={poker}>Покер</h3>
                <h3 className="links" onClick={blackjack}>Блэкджек</h3>
                <div id="rightHeader">
                    <h2>{money}$</h2>
                    <img src="" alt="" />
                </div>
            </header>
        </>
    )
};