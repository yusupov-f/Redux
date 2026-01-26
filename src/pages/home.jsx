import { useSelector } from "react-redux";

const Home = () => {

    const theme = useSelector((state) => state.ui.theme)

    return (
        <main style={{
            padding: "40px",
            minHeight: "60px",
            background: theme === "light" ? "#fff" : "#222",
            color: theme === "light" ? "#000" : "#fff",
        }}>
            <h2>Welcome to AniStyle</h2>
            <p>Покупка совреенной одежды.</p>
        </main>
    )
}

export default Home;