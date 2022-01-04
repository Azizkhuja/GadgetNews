import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Hero/Footer/Footer";
import NineToFivemac from "./components/Vendors/NineToFivemac";
import TechRader from "./components/Vendors/TechRader";
import Gsmarena from "./components/Vendors/Gsmarena";
import TheVerge from "./components/Vendors/TheVerge";
import TechCrunch from "./components/Vendors/TechCrunch";
import Wired from "./components/Vendors/Wired";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/9to5Mac" element={<NineToFivemac />} />
            <Route path="/TechRadar" element={<TechRader />} />
            <Route path="/GSMArena" element={<Gsmarena />} />
            <Route path="/TheVerge" element={<TheVerge />} />
            <Route path="/TechCrunch" element={<TechCrunch />} />
            <Route path="/Wired" element={<Wired />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </QueryClientProvider>
  );
}

export default App;
