import React from "react";
import "./career.css";

function CareerPage() {
  return (
    <>
      <div className="bg-secondary text-dark fs-1 py-4 fw-bold career-title-div d-flex justify-content-start align-items-center ps-5">
        Career
      </div>
      <section className="career py-5">
        <div className="container" id="training">
          <div className="row d-flex  mb-5 flex-column justify-content-center">
            <p className="w-100 career-paragraph">
              Surrounded by a world of change, one of your best bets to
              supplement your livelihood is to continuously learn and grow. CAA,
              offers the opportunity to help you progress in your career:
              professionally and personally.
            </p>
            <p className="w-100 career-paragraph">
              Inside our firm, the collaborative, people-focused culture
              encourages mutual respect, open communications and ongoing
              learning. Broaden your career path and your mind through our
              various corporate training programs, education initiatives,
              performance management programs, mentoring programs and regular
              performance feedback. Outside of work, you’ll have time for the
              people you care about most – family and friends.
            </p>
            <p className="w-100 career-paragraph">
              Our leadership team is very cognizant that the broader our
              employees’ backgrounds, experiences and education becomes the more
              diverse their views and insights evolve. CAA fosters forward
              thinking, innovation, diversity, ethics and integrity to
              strengthen our organization and our people, and to respond to our
              clients’ needs. The result is a collaborative environment that
              respects individual needs and promotes ongoing development.
            </p>
            <p className="w-100 career-paragraph">
              If you are interested in becoming a future member of the CAA Team,
              please send us your resume using below tab:
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerPage;
