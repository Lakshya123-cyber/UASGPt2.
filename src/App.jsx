import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Member from "./pages/members/Member";
import Events from "./pages/events/Events";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventDetails from "./pages/eventDetails/EventDetails";
import { useEffect, useState } from "react";
import RingLoader from "./UI/RingLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {loading ? (
        <RingLoader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="events" element={<Events />} />
            <Route path="event_details" element={<EventDetails />} />
            <Route path="members" element={<Member />} />
            <Route path="plans" element={<Plans />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
