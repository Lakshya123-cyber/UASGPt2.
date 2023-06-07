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
import { useEffect, useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "350px",
  marginLeft: "120px",
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {loading ? (
        <HashLoader
          color="#36d7b7"
          loading={loading}
          size={150}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
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
