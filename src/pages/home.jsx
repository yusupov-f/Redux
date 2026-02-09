import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../styles/home.css"



const Home = () => {

    const theme = useSelector((state) => state.ui.theme)

    useEffect(() => {
        document.body.className = theme  
    }, [theme])

    return (
        <main className="home container">
            <h2> Главная страница</h2>
                <p> Добро пожаловать на сайт AniStyle!</p>
        </main>
    )
};

export default Home