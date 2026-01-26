import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";


const Header = () => {

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.ui.theme)


    return (
        <header style={{
            padding: "20px",
            background: theme === "light" ? "#eee" : "#333",
            color: theme === "light" ? "#000" : "#fff",

        }}>

            <h1> AniStyle</h1>
            <button>onClick={() => dispatch(toggleTheme())}
                смена темы
            </button>
        </header>


)
}

export default Header;