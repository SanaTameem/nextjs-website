import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./homeServices.css";

function HomeServices() {
  return (
    <>
      <section className="services flex-column py-5 mt-5 d-flex justify-content-center align-items-center">
        <div
          className="container d-flex justify-content-center align-items-center flex-column"
          id="services"
        >
          <p className="title text-center h2 fw-bold">CAA Practice Areas</p>
          <div className="title-border align-self-center"></div>
          <div className="row mt-5 d-flex services-row">
            <div class="card col-md-4 border-0">
              <div class="card-body d-flex flex-column justify-content-start align-items-center">
                <h5 class="card-title fw-light">Accounting Services</h5>
                <p class="card-text text-center">
                  Keeping accurate and timely financial records is key to your
                  business’ success. We can help. We are helping businesses with
                  all of their accounting needs.
                </p>
              </div>
            </div>
            <div class="card col-md-4 border-0">
              <div class="card-body d-flex flex-column justify-content-start align-items-center">
                <h5 class="card-title fw-light">Audit Services</h5>
                <p class="card-text text-center">
                  Think all audits are the same? Not true. While many firms are
                  capable of conducting audits, relatively few have the
                  capabilities of advancing beyond this process in order to
                  benefit you. During an audit conducted by Credence Auditors &
                  Advisors, we go beyond the numbers.
                </p>
              </div>
            </div>
            <div class="card col-md-4 border-0">
              <div class="card-body d-flex flex-column justify-content-start align-items-center">
                <h5 class="card-title fw-light">
                  Business Consulting Services
                </h5>
                <p class="card-text text-center">
                  At Credence Auditors & Advisors, our business consultants are
                  motivated by understanding that the services they provide must
                  deliver results if they are to make a difference in your
                  organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-around align-items-center services-image w-100">
        <div className="services-image-text">
          <h3 className="text-light fw-bold">
            We look forward to doing great things with you
          </h3>
          <p className="text-secondary fw-blod fs-3">
            anywhere in the Afghanistan.
          </p>
        </div>
        <button
          type="button"
          className="quote-btn btn text-light fw-bold border-3 border-secondary"
        >
          GET A QUOTE
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-light p-2 my-2 right-icon"
          />
        </button>
      </div>
    </>
  );
}

export default HomeServices;
