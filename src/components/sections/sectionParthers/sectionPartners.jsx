import './style.css';
import Icon from '../../icon/icon';
import Btn from '../../btn/btn';

const SectionPartners = () => {
    return ( 
        <section className="partner">
        <div className="container">
          <h2 className="partner__title">
            The Is Closing Headline To Make A Impact For Call To Action
          </h2>
          <p className="partner__text">
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a
            digital lending strategy to streamline the lending process nowadays,
            it isn’t uncommon to see lenders rapidly
          </p>
          <Btn className="btn__wide" text="Book A Meeting" link="/help"/>
          <div className="svg__block">
            <Icon name="philips" height={50} width={100} className="philips" />
            <Icon
              name="logitech"
              height={50}
              width={100}
              className="logitech"
            />

            <Icon name="amazon" height={60} width={150} className="amazon" />
            <Icon
              name="facebook"
              height={50}
              width={100}
              className="facebook"
            />
            <Icon name="google" height={50} width={100} className="google" />
            <Icon
              name="linkedin"
              height={50}
              width={100}
              className="linkedin"
            />
          </div>
        </div>
      </section>
     );
}
 
export default SectionPartners;