import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Member from "./pages/members/Member";
import Events from "./pages/events/Events";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Member />
      <Events />
      <Plans />
      <NotFound />
    </BrowserRouter>
  );
};

export default App;