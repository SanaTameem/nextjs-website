import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="contact-bottom-text w-100 p-3 d-flex justify-content-around align-items-center bg-secondary">
        <p className="fw-bold fs-4">
          Looking for a First-Class Business Plan Consultant?
        </p>
        <button className="btn btn-primary">GET A QUOTE</button>
      </div>
      <footer className="footer p-4 text-light">
        <div className="container">
          <div className="d-flex footer-row">
            <div className="col-md-4 d-flex justify-content-start align-items-center fw-bold h3 text-white">
              consulting
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column gap-3 justify-content-center align-items-start">
                <div className="d-flex flex-column gap-1">
                  <div className="footer-icon-div d-flex gap-1 align-items-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="footer-icon text-success"
                    />
                    <p className="contact-value m-0">+ 93 (0) 700 26 25 21</p>
                  </div>
                  <div className="footer-icon-div d-flex gap-1 align-items-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="footer-icon text-danger"
                    />
                    <p className="contact-value m-0">info@caa.af</p>
                  </div>
                  <div className="footer-icon-div d-flex gap-1 align-items-center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="footer-icon text-dark"
                    />
                    <p className="contact-value m-0">
                      Room No. 201, 5th Floor, Mirwais Plaza, Near Etisalat
                      Building, Haji Yaqoob Square, Shahre Naw, Kabul,
                      Afghanistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <button className="btn btn-dark text-light">Subscribe</button>
            </div>
          </div>
          <p className="text-center text-light mt-2 border-top border-primary pt-2 fw-bold">
            © 2024 Website, Inc
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
