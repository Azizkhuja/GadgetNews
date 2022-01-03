import { QueryClientProvider, QueryClient } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Hero/Footer/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <CssBaseline />
        <Navbar />
        <Hero />
        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default App;
