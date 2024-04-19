import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./assets/shared/pages/MainLayout";
import Error from "./assets/shared/pages/Error";
import Home from "./assets/shared/pages/Home";
import About from "./assets/shared/pages/About";

export default function App() {
  return <BrowserRouter basename={import.meta.env.VITE_BASENAME}>
      <Routes>
        <Route path="/" element={<MainLayout/>} errorElement={<Error/>}>
          <Route path="/home-page" element={<Home/>}></Route>
          <Route path="/about-page" element={<About/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
}
