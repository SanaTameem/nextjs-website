import Image from "next/image";
import "./banner.css";

function Banner() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
      </ol>
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100">
          <Image
            width={1000}
            height={800}
            className="d-block w-100 banner-img"
            src="https://caa.af/wp-content/uploads/revslider/main_slider/slide-1.jpg"
            alt="First slide image"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">
              Helping organizations innovate, transform, and lead
            </h5>
            <p>
              By making an impact on the current issues that our clients face,
              and anticipating ones they may face in the future, we help empower
              them with the confidence that leads to effective decisions for
              their organizations.
            </p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <Image
            width={1000}
            height={800}
            className="d-block w-100 banner-img"
            src="https://caa.af/wp-content/uploads/revslider/main_slider/slide-2.jpg"
            alt="Second slide image"
          />
          <div className="carousel-caption d-none d-md-block">
            <p className="fs-1">
              “We have the capabilities and experience to deliver the answers
              you need to move forward.”
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon control-btns"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon control-btns"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Banner;
