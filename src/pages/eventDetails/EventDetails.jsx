import React, { useEffect } from "react";
import { posts } from "../../data";
import "./eventDetails.css";
import { Link } from "react-router-dom";
import pdf from "../../images/kauthigg.pdf";

const EventDetails = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="home">
      <div className="posts">
        <a
          href={pdf}
          without
          rel="noopener noreferrer"
          target="_blank"
          className="btn sm"
        >
          Kauthig Brochure 2023
        </a>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="helilo" />
            </div>
            <div className="content">
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <br />
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
