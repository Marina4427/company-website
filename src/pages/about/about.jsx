import Btn from "../../components/btn/btn";
import foto from "../../assets/images/main.jpg";
import "./style.css";
import feature from "../../assets/images/feature.png";
import Icon from "../../components/icon/icon";
import add from "../../assets/images/add-content.png";
import create from "../../assets/images/create.png";
import publish from "../../assets/images/publish.png";
import SectionPartners from "../../components/sections/sectionParthers/sectionPartners";
import SectionVideo from "../../components/sections/sectionVideo/sectionVideo";
import StorySlider from "../../components/sliders/storySlider/storySlider";
import CoworkersSlider from "../../components/sliders/coworkersSlider/coworkersSlider";

const About = () => {
  
  return (
    <main>
      <section className="services__gap">
        <div className="services">
          <div className="container">
            <h1 className="title-1 services__title">
              We have created a big library of illustrations with custom style
              and action types.
            </h1>
            <p className="services__text">
              “E-commerce Illustration Pack collects different ways to do quick
              shopping, pay in a second, and get all those stuff you need. There
              are smart delivery and polite service in the scenes. Each of them
              is realized in cold and warm colors with”
            </p>
            <div className="container__person__info">
              <div className="circle">
                <img className="person_foto" src={foto} alt="Foto person" />
              </div>
              <div className="person__description">
                <p>Jesica Kumari</p>
                <p>CEO Of Acme Limited</p>
              </div>
            </div>
            <Btn text="Explore More About This" className="btn__wide" link="/about"/>
          </div>
        </div>

        <div className="statistic">
          <div className="small_container">
            <div className="statistic__header">
              <h2 className="statistic__title title-2 ">
                Some count that matters
              </h2>
              <p className="statistic__text">
                Our achievement in the journey depicted in numbers
              </p>
            </div>
            <ul className="statistic__list">
              <li className="statistic__item">
                <span className="statistic__num">5</span>
                <span className="statistic__span">Service Geographics</span>
              </li>
              <li className="statistic__item">
                <span className="statistic__num">30</span>
                <span className="statistic__span">Fortune 500 Clients</span>
              </li>
              <li className="statistic__item">
                <span className="statistic__num">300</span>
                <span className="statistic__span">Dedicated Members</span>
              </li>
              <li className="statistic__item">
                <span className="statistic__num">8</span>
                <span className="statistic__span">Years of Journey</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionVideo />

      <section className="feature container">
        <ul className="feature__list">
          <li className="feature__item">
            <Icon name="square" width="44" height="44"></Icon>
            <h3 className="feature__title title-3">First Feature</h3>
            <p className="feature__text">
              Gorgeous, high-quality design system for mobile, tablet and
              desktop devices a few reasons
            </p>
          </li>

          <li className="feature__item">
            <Icon name="layers" width="44" height="44"></Icon>

            <h3 className="feature__title title-3">Second Feature</h3>
            <p className="feature__text">
              Gorgeous, high-quality design system for mobile, tablet and
              desktop devices a few reasons
            </p>
          </li>

          <li className="feature__item">
            <Icon name="heart" width="44" height="44"></Icon>
            <h3 className="feature__title title-3">Third Feature</h3>
            <p className="feature__text">
              Gorgeous, high-quality design system for mobile, tablet and
              desktop devices a few reasons
            </p>
          </li>

          <li className="feature__item">
            <Icon name="star" width="44" height="44"></Icon>
            <h3 className="feature__title title-3">Fourth Feature</h3>
            <p className="feature__text">
              Gorgeous, high-quality design system for mobile, tablet and
              desktop devices a few reasons
            </p>
          </li>

          <li className="feature__item">
            <Icon name="light" width="44" height="44"></Icon>
            <h3 className="feature__title title-3">Fifth Feature</h3>
            <p className="feature__text">
              Gorgeous, high-quality design system for mobile, tablet and
              desktop devices a few reasons
            </p>
          </li>

          <li className="feature__item">
            <Icon name="shield" width="44" height="44"></Icon>
            <h3 className="feature__title title-3">Sixth Feature</h3>
            <p className="feature__text">
              Gorgeous, high-quality design system for mobile, tablet and
              desktop devices a few reasons
            </p>
          </li>
        </ul>
        <img src={feature} alt="Feature." className="feature__img" />
      </section>

      <CoworkersSlider />
      <StorySlider />

      <section className="howWorks container">
        <h2 className="howWork__header">How it works</h2>
        <ul className="howWorks__list">
          <li className="howWorks__item">
            <img className="howWork__img" alt="Create." src={create} />
            <p className="howWork__title">Create your site </p>
            <p className="howWork__text">Create an account to get started.</p>
          </li>

          <li className="howWorks__item">
            <img className="howWork__img" alt="Add content." src={add} />
            <p className="howWork__title">Add Contents </p>
            <p className="howWork__text">
              Add contents and pages to your site.
            </p>
          </li>

          <li className="howWorks__item">
            <img className="howWork__img" alt="Publish." src={publish} />
            <p className="howWork__title">Publish</p>
            <p className="howWork__text">Now publish to make your site live!</p>
          </li>
        </ul>
      </section>
      <SectionPartners />
    </main>
  );
};

export default About;
