import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThingsList from "./pages/ThingsList";
import ThingsDetail from "./pages/ThingsDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<ThingsList />} />
        <Route path="/things/:id" element={<ThingsDetail />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;