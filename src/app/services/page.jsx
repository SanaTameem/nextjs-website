import Image from "next/image";
import "./service.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const servicesList = [
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Human Resource Management",
      description: "",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Workforce Management",
      description: "",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Taxation Services",
      description: "",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Business Advisory Services",
      description:
        "Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Audit Services",
      description:
        "Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities.",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Accounting Services",
      description:
        "Audit and assurance is all about meticulous data analysis. Everything needs to be checked, double checked, and triple checked.",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Not-for-Profit Services",
      description:
        "This allows us to specialize in all dimensions of trades and stocks, because we have a specialist within the team for every scenario.",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Risk Advisory",
      description:
        "We work with our clients and do a deep analysis of their business. We help prepare possible outcomes to different decisions.",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Corporate Training Programs",
      description:
        "This stops companies from taking drastic measures like downsizing or closing down sites; those things happen only with no or bad financial projections.",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Talent Outsourcing Services",
      description:
        "We allow you to enter international waters without having to worry about making a mistake, as we use our international experience.",
    },
    {
      img: "http://caa.af/wp-content/uploads/2016/05/placeholder.gif?id=1270",
      title: "Business Planning, Strategy & Execution",
      description:
        "Execution is the single most important part of the whole process, poor execution can result in a lot of lost time and money.",
    },
  ];

  return (
    <section className="services container pb-5">
      <div className="row">
        {servicesList.map((service) => (
          <div class="card col-md-4 col-lg-3 service-card rounded-0" key={service.title}>
            <Image
              width={100}
              height={180}
              class="card-img-top rounded-0"
              src={service.img}
              alt="Card image cap"
            />
            <div class="card-body">
              <div className="title-border align-self-start w-25 m-3"></div>
              <h5 class="card-title">{service.title}</h5>
              <p class="card-text">{service.description}</p>
              <Link href="/" class="text-dark text-decoration-none fw-bold">
                Read More
                <FontAwesomeIcon icon={faChevronRight} className="text-dark p-2 my-2 right-icon"/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
