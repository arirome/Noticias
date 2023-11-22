import React from "react";

import footer from "../../assets/img/footer.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container-fluid text-white "
      style={{ background: "#061429" }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "75px" }}
            >
              <img src={footer} alt="Footer" style={{ width: "80%" }}></img>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "75px" }}
            >
              <p className="mb-0">
                &copy;{" "}
                <Link className="text-white border-bottom" to="/">
                  Soberanía Alimentaria Formoseña
                </Link>
                
              </p>
            </div>
           


          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;