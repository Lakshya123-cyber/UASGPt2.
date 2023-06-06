import { useEffect } from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found!</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
