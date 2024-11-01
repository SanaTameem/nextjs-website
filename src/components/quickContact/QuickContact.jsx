import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./quickContact.css";

function QuickContact() {
  return (
    <section className="quickContact bg-light flex-column py-5 d-flex justify-content-center align-items-center w-100">
      <div
        className="container d-flex justify-content-center align-items-center flex-column"
        id="services"
      >
        <p className="title text-center h2 fw-bold">Request a Call back.</p>
        <div className="title-border align-self-center"></div>
        <div className="container ">
          <div className="row d-flex mt-5">
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <p className="quickContact-info">
                Do you have questions about how CAA can help your company? Send
                us an email and we’ll get in touch shortly, or phone between
                8:00 and 18:00 Saturday to Thursday — we would be delighted to
                speak.
              </p>
              <div className="contact-icons-div d-flex justify-content-between align-items-center w-100">
                <div className="contact-details-item d-flex w-100 justify-content-start align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon text-light bg-secondary rounded-0 p-2 my-2"
                  />
                  <div className="contact-text">
                    <p className="contact-value m-0">+93 788 527 527</p>
                  </div>
                </div>
                <div className="contact-details-item d-flex w-100 justify-content-start align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon text-light bg-secondary rounded-0 p-2 my-2"
                  />
                  <div className="contact-text">
                    <p className="contact-value m-0">+93 788 527 527</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form className="w-100 p-3 d-flex align-items-center justify-content-center contact-form">
                <div className="form-row contact-form-row w-100 d-flex flex-column">
                  <div className="form-group col-6 w-100">
                    <input
                      type="text"
                      className="form-control rounded-0 py-3 contact-input"
                      id="inputFirstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-6 w-100">
                    <input
                      type="text"
                      className="form-control rounded-0 py-3 contact-input"
                      id="inputPhone"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className="form-row contact-form-row w-100 d-flex flex-column">
                  <select
                    className="form-select col-6 w-100 rounded-0 py-3 contact-input"
                    id="contact-dropdown"
                    defaultValue="Business Planning"
                  >
                    <option value="option1">
                      Business Planning
                    </option>
                    <option value="option2">Audit & Assurance</option>
                    <option value="option3">Strategic Planning</option>
                    <option value="option4">Trades and Stocks</option>
                    <option value="option5">Financial Projections</option>
                  </select>
                  <div className="col-6 w-100">
                    <button
                      type="submit"
                      className="btn rounded-0 btn-primary align-self-start w-75"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickContact;
