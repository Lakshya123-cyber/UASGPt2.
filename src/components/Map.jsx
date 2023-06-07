import React from "react";
import styled from "styled-components";
import MapImg from "../images/map.png";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 650px;
  }
  .map__card {
    position: absolute;
    right: 30%;
    bottom: 10%;
    padding: 2rem;
    background: #00becc;
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }

  .map__card__link {
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 0.4rem;
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    background-position: 50% center;
    .map__card {
      max-width: none;
      right: 2%;
    }
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

const Map = () => {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">We are here</h3>
          <p>Ubi Ave 3, Singapore</p>
          <a
            className="map__card__link"
            href="https://goo.gl/maps/SsdEXQ2xXZweZ2rP9"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
};

export default Map;
