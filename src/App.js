import Sidebar from "./components/sideMenu/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basics from "./pages/Basics";
import Typography from "./pages/typography/Typography";
import BrandIdentity from "./pages/BrandIdentity";
import Color from "./pages/Color";
import Layout from "./pages/Layout";
import Presentation from "./pages/Presentation";
import AppCSS from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={AppCSS.main_container}>
        <Sidebar />
        <Routes>
          <Route path="/brand/basics" element={<Basics />} />
          <Route path="/design/brandIdentity" element={<BrandIdentity />} />
          <Route path="/design/typography" element={<Typography />} />
          <Route path="/design/color" element={<Color />} />
          <Route path="/design/layout" element={<Layout />} />
          <Route path="/presentation/presentationIdentity" element={<Presentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
