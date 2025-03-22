import mainfoto from "../../assets/images/main.jpg";
import Btn from "../../components/btn/btn";
import Icon from "../../components/icon/icon";
import imgbook from "../../assets/images/svg/round1.svg";
import imglist from "../../assets/images/svg/round2.svg";
import imgstar from "../../assets/images/svg/round3.svg";

import "./style.css";
import StorySlider from "../../components/sliders/storySlider/storySlider";
import SectionPartners from "../../components/sections/sectionParthers/sectionPartners"; 

const Home = () => {
  return (
    <main className="main">
      <section className="person">
        <div className="person_container container">
          <div className="person__left">
            <h1 className="title-1">
              This headline is the gist of the your whole website
            </h1>
            <p className="person__desc">
              And the description of hero section is follow up message after the
              punch of a great headline. So, make it short, simple, descriptive
              and to the point.
            </p>
            <div className="btn__block">
              <Btn className="btn__wide" text="Book A Meeting" link="/help"/>
              <p className="text small btn__desc">
                Here you can put secondary action statement & CTA
              </p>
            </div>
            <div className="svg__block">
              <Icon
                name="logitech"
                height={50}
                width={100}
                className="logitech"
              />
              <Icon name="google" height={50} width={100} className="google" />
              <Icon name="amazon" height={60} width={150} className="amazon" />
            </div>
          </div>
          <div className="person__foto person__rigth">
            <img src={mainfoto} alt="Woman coworker" className="main__image" />
          </div>
        </div>
      </section>

      <section className="benefits container" id="benefits">
        <div className="benefits__list-container">
          <ul className="benefits__list">
            <li className="benefits__list-item">
              <div className="item__container">
                <img src={imgbook} alt="icon" className="item-image" />
                <div className="text-container">
                  <p className="title-3 item-title">First Benefit</p>
                  <p className="item-text">
                    Gorgeous, high-quality design system for mobile, tablet &
                    desktop devices a few
                  </p>
                </div>
              </div>
            </li>
            <li className="benefits__list-item">
              <div className="item__container">
                <img src={imgstar} alt="icon" className="item-image" />
                <div className="text-container">
                  <p className="title-3 item-title">Second Benefit</p>
                  <p className="item-text">
                    Gorgeous, high-quality design system for mobile, tablet &
                    desktop devices a few
                  </p>
                </div>
              </div>
            </li>
            <li className="benefits__list-item">
              <div className="item__container">
                <img src={imglist} alt="icon" className="item-image" />
                <div className="text-container">
                  <p className="title-3 item-title">Third Benefit</p>
                  <p className="item-text">
                    Gorgeous, high-quality design system for mobile, tablet &
                    desktop devices a few
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="benefits__info__block">
          <h2 className="title-2 info__title">
            Headline of Modern and Digital Lending Platform Seconds
          </h2>
          <p className="info__text">
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a
            digital lending strategy
          </p>
          <div>
            <Btn text="Learn More About" className="btn__wide" link="/about"/>
          </div>
        </div>
      </section>

      <section className="work container">
        <h2 className="title-2">Benefits of working with us</h2>
        <div className="working__list-container">
          <ul className="working__list">
            <li className="working__list-item">
              <Icon name="round21" height={72} width={72} className="image" />

              <div className="work__text-container">
                <p className="title-3 ">Time zones ain’t no thing</p>
                <p className="work-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis et sed nam sem tellus erat.
                </p>
              </div>
            </li>
            <li className="working__list-item">
              <Icon name="round22" height={72} width={72} className="image" />
              <div className="work__text-container">
                <p className="title-3 ">Full spectrum of services</p>
                <p className="work-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis et sed nam sem tellus erat.
                </p>
              </div>
            </li>
            <li className="working__list-item">
              <Icon name="round23" height={72} width={72} className="image" />
              <div className="work__text-container">
                <p className="title-3 ">Impossible? We’re on it</p>
                <p className="work-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis et sed nam sem tellus erat
                </p>
              </div>
            </li>
            <li className="working__list-item">
              <Icon name="round24" height={72} width={72} className="image" />
              <div className="work__text-container">
                <p className="title-3 ">Flexible work terms</p>
                <p className="work-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis et sed nam sem tellus erat.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div class="gap__block__container">
          <StorySlider />
      </div>

      <section class="process container" id="process">
        <h2 class="title-2 process__title">The process we follow</h2>
        <ul class="process__list">
          <li class="process__list-item">
            <div class="process_decoration">
              <div class="circle"></div>
              <div class="dotted-line"></div>
            </div>
            <div class="text-container">
              <p class="title-3 work__title">Ideate</p>
              <p class="process-description">
                Turn your idea from concept to MVP
              </p>
            </div>
          </li>
          <li class="process__list-item">
            <div class="process_decoration">
              <div class="circle"></div>
              <div class="dotted-line"></div>
            </div>
            <div class="text-container">
              <p class="title-3 work__title">Design</p>
              <p class="process-description">
                Sketch out the product to align the user needs
              </p>
            </div>
          </li>
          <li class="process__list-item">
            <div class="process_decoration">
              <div class="circle"></div>
              <div class="dotted-line"></div>
            </div>
            <div class="text-container">
              <p class="title-3 work__title">Develop</p>
              <p class="process-description">
                Convert the designs into a live application
              </p>
            </div>
          </li>
          <li class="process__list-item">
            <div class="process_decoration">
              <div class="circle"></div>
            </div>
            <div class="text-container">
              <p class="title-3 work__title">Deploy</p>
              <p class="process-description">
                Launching the application to the market
              </p>
            </div>
          </li>
        </ul>
      </section>

      <SectionPartners />
      
    </main>
  );
};

export default Home;
