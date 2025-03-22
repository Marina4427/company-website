import Form from "../../components/form/form";
import "./style.css";
import team from "../../assets/images/team.jpg";
import map from "../../assets/images/map.jpg";
import Icon from "../../components/icon/icon";

const Hepl = () => {
  return (
    <>
      <div className="block_blue">
        <div className="contact section">
          <div className="container contact__container">
            <div className="contact__info">
              <h1 className="title-1 contact__title">Contact Us</h1>
              <p className="contact__text">
                If you have any questions about the subscription or are not sure
                which plan is right for you, contact our team and let’s schedule
                a call.
              </p>
              <div className="button__container">
                <a
                  className="button button__call"
                  href="tel:6699849439"
                  role="button"
                >
                  <span className="button_description">Call Us</span>
                  <span className="indent">(669) 984-9439</span>
                </a>
                <a
                  className="button button__email"
                  href="mailto:hello@openthrive.com"
                  role="button"
                >
                  <span className="button_description">Email Us</span>
                  <span className="indent">hello@openthrive.com</span>
                </a>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>

      <div className="container1">
        <div className="svg__section1">
        <div className="svg__block1">
          <Icon name="google" height={50} width={100} className="google" />
          <Icon name="amazon" height={60} width={150} className="amazon" />
          <Icon name="facebook" height={50} width={100} className="facebook" />

          <Icon
            name="atlassian"
            height={50}
            width={100}
            className="atlassian"
          />
        </div>
      </div>
      </div>

      <section className="office container ">
        <h2 className="office__title title-2">Our offices</h2>
        <p className="office__description">
          Amazing cities, totally tricked out offices. Explore the world of
          Tweakful.
        </p>

        <div className="cards__item team">
          <div className="card__img-container">
            <img className="card__img" src={team} alt="Our team." />
          </div>
          <div className="card__content">
            <h3 className="office__name title-3">Vancouver Office</h3>
            <address className="office__address">
              1085 Homer St. Vancouver BC, Canada V6B 2X5
            </address>
            <a
              className="card__link"
              href="https://www.google.ru/maps/place/1085+Homer+St,+Vancouver,+BC+V6B+2X5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>

        <div className="cards__item address">
          <div className="card__img-container">
            <img className="card__img" src={map} alt="Our team." />{" "}
          </div>
          <div className="card__content">
            <h3 className="office__name title-3">Vancouver Office</h3>
            <address className="office__address">
              1085 Homer St. Vancouver BC, Canada V6B 2X5
            </address>
            <a
              className="card__link"
              href="https://www.google.ru/maps/place/1085+Homer+St,+Vancouver,+BC+V6B+2X5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hepl;
