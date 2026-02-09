import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";
import "../styles/header.css"



const Header = () => {
    const dispatch = useDispatch();

    
    return (
        <header>
            <div className="header-inner container">
            <div className="Мой сайт на редукс"></div>

            <nav className="nav">
                <a href="#">Главная</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
            </nav>

            <button
                className="theme-btn"
                onClick={() => dispatch(toggleTheme())}
            >
                Сменить тему
            </button>
            </div>
        </header>
    )
};


export default Header