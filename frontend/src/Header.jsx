import Menu from "./assets/Menu.svg";
import "./Header.css"

export default function Header({ money }) {
    return (
        <>
            <header>
                <div id="leftHeader">
                    <img src={Menu} alt="" />
                    <h2>Luck-Duck Casino</h2>
                </div>
                <div id="rightHeader">
                    <h2>{money}$</h2>
                    <img src="" alt="" />
                </div>
            </header>
        </>
    )
};