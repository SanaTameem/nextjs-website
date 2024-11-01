"use client";
import React from "react";
import "./contact.css";
import { useState } from "react";

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullName, email, phone, message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ fullName, email, phone, message }),
    });

    const data = await res.json();
    setError(data.msg);
    console.log(data.msg);

    if (data.success) {
      setSuccess(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setSuccess(false);
    }
  };

  return (
    <>
      <section className="py-5 contact-page">
        <div className="container ">
          <div className="row d-flex mt-5">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <ul className="contact-details w-100 d-flex flex-column list-unstyled">
                <li className="contact-details-item d-flex w-100 justify-content-start align-items-center">
                  <div className="contact-text">
                    <p className="contact-value m-0">
                      Address: Room No. 201, 5th Floor, Mirwais Plaza, Near
                      Etisalat Building, Haji Yaqoob Square, Shahre Naw, Kabul,
                      Afghanistan.
                    </p>
                  </div>
                </li>
                <li className="contact-details-item d-flex w-100 justify-content-start align-items-center">
                  <div className="contact-text">
                    <a
                      className="contact-value m-0"
                      href="mailto:elitebarrytech@gmail.com"
                      target="_blank"
                    >
                      Phone: + 93 (0) 700 26 25 21
                    </a>
                  </div>
                </li>
                <li className="contact-details-item d-flex w-100 justify-content-start align-items-center">
                  <div className="contact-text">
                    <p className="contact-value m-0">Email: info@caa.af</p>
                  </div>
                </li>
                <li className="contact-details-item d-flex w-100 justify-content-start align-items-center">
                  <div className="contact-text">
                    <p className="contact-value m-0">Website: www.caa.af</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <ul className="error-msg d-flex flex-column">
                {error &&
                  error.map((e) => (
                    <li
                      key={e}
                      className={`${
                        success ? "text-success" : "text-danger"
                      } ms-3`}
                    >
                      {e}
                    </li>
                  ))}
              </ul>
              <form
                onSubmit={handleSubmit}
                className="w-100 p-3 d-flex align-items-center justify-content-around contact-form"
              >
                <div className="form-input-div w-50 d-flex flex-column">
                  <div className="form-row d-flex contact-form-row">
                    <div className="form-group col-12">
                      <input
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                        type="text"
                        className="form-control rounded-0 py-3 contact-input"
                        id="inputFullName"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div className="form-row d-flex contact-form-row">
                    <div className="form-group col-12">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="form-control rounded-0 py-3 contact-input"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="form-row d-flex contact-form-row">
                    <div className="form-group col-12">
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="text"
                        className="form-control rounded-0 py-3 contact-input"
                        id="inputPhone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-btn-textArea-div w-50 d-flex flex-column">
                  <div className="form-group">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="form-control contact-input rounded-0"
                      id="inputAddress"
                      placeholder="Write your message here..."
                      rows={6}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn rounded-0 btn-primary align-self-start"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
