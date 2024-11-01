import React from "react";
import "./about.css";

function AboutPage() {
  return (
    <>
      <section className="about-page container flex-column py-5 d-flex justify-content-center align-items-start gap-1">
        <p className="title h2 fw-bold">Company overview</p>
        <div className="title-border align-self-start"></div>
        <p className="mt-3">
          CREDENCE Auditors & Advisors is an audit and advisory firm based in
          Kabul, Afghanistan and registered with Afghanistan Investment Support
          Agency (AISA).
          <br />
          <br />
          CREDENCE has an International Association and is a representative
          office of CENTRICSOL Consulting International in Afghanistan for SAP B
          1 and QuickBooks services which is a member firm of GMN International,
          an association of independent accounting, auditing and consulting
          firms which is one of the world’s largest groups of accountants and
          management consultants working in 45 countries all over the world. We
          have a bunch of more than 45 professionally trained people in our
          team. Services we offer include:
        </p>
        <ul className="list">
          <li>Audit</li>
          <li>Advisory</li>
          <li>Taxation</li>
        </ul>
        <p>
          CREDENCE plans to emerge as a prominent firm of accountants and
          auditors offering a wide range of services to national and
          international clients in Afghanistan.
        </p>
        <p>
          We achieved our success because of how successfully we integrate with
          our clients. One complaint many people have about consultants is that
          they can be disruptive. Employees fear outside consultants coming in
          and destroying the workflow. Our clients face no such issues.
        </p>
        <p className="bg-light about-paragraph p-4 fst-italic">
          CAA continues to grow ever day thanks to the confidence our clients
          have in us. We cover many industries such as financial, energy,
          business services, consumer products.
        </p>
        <h6 className="fw-bold">Our Vision</h6>
        <p>
          To be the most reputed audit and advisory services firm in Afghanistan
          and having a global footprint.
        </p>

        <h6 className="fw-bold">Our Mission</h6>
        <p>
          To serve our clients to their utmost satisfaction while at the same
          time performing our work to the highest standards of professional
          integrity and ethics.
        </p>

        <h6 className="fw-bold">Our Core Values</h6>
        <p>
          Credence’s Core Values define how we treat our clients and each other.
          They set key parameters within which individual and team performance
          is measured and rewarded. They are embedded in the way we operate and
          in the value we create for our clients and communities.
        </p>

        <h6 className="fw-bold">Integrity:</h6>
        <p>
          We do what is right, not what is easiest. We are true to ourselves and
          others. We are transparent, honest, and consistent. We take pride in
          our work and act with professionalism.
        </p>

        <h6 className="fw-bold">Respect:</h6>
        <p>
          We listen and communicate directly and openly. We value diversity
          among people, ideas and points of view. We are natural partners with
          our clients, colleagues, and our community, and we are at our best
          when working as a team.
        </p>

        <h6 className="fw-bold">Teamwork: </h6>
        <p>
          We will continue to build a collaborative work environment by
          providing opportunities for growth through delegating
          responsibilities, sharing information and experience, relying on each
          other’s expertise, keeping commitments and trusting each other.
        </p>

        <h6 className="fw-bold">Commitment: </h6>
        <p>
          We are passionate about solving complex business problems and helping
          to shape the next generation of financial services. We are intensely
          focused on serving our clients and helping them achieve their business
          objectives. We do what we say we are going to do: we create value.
        </p>

        <h6 className="fw-bold">Client service: </h6>
        <p>
          We anticipate our clients’ needs, advance their business priorities
          and, wherever possible, exceed their expectations.
        </p>

        <h6 className="fw-bold">Professional excellence: </h6>
        <p>
          We challenge ourselves to execute flawlessly and to consistently
          deliver the highest quality of service to our clients. We seek the
          best talent and promote personal and professional development. We aim
          to always exceed our financial goals and the expectations of our
          clients, our colleagues and our shareholders.
        </p>
      </section>
    </>
  );
}

export default AboutPage;
