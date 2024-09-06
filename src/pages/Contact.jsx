import Indicator from "../components/Indicator";
import RandomScrollText from "../components/RandomText";
import topTransition from "../components/topTransition";
import "./Contact.css";

const Contact = () => {
  const ImageWithTransition = topTransition(() => (
    <img src="./images/Scroll-2.jpg" alt="Profile" className="profile-image" />
  ));
  return (
    <div className="container">
      <div className="left">
        <marquee className="scroll" scrollamount="12">
          My design style is a reflection of my personality.
        </marquee>
        <div className="heading" id="contact-title">
          <RandomScrollText text={"CONTACT ME"} />
        </div>
        <div class="contact-detail">
          <p>
            <object type="image/svg+xml" data="./images/Vector.svg"></object>
            +918939328454
          </p>
          <p>
            <object type="image/svg+xml" data="./images/Email.svg"></object>
            deesawalataha@gmail.com
          </p>
          <p>
            <object type="image/svg+xml" data="./images/Location.svg"></object>
            75 Basin Bridge Road, Burhani Towers, B-Block, 9-Floor, Door no-57,
            Chennai-600021
          </p>

          <p id="bottom">
            <object type="image/svg+xml" data="./images/Instagram.svg"></object>
            <object type="image/svg+xml" data="./images/LinkedIn.svg"></object>
            <object type="image/svg+xml" data="./images/WhatsApp.svg"></object>
          </p>
        </div>
        {/* <Button text="Get in touch" /> */}
      </div>
      <ImageWithTransition />
      <Indicator />
    </div>
  );
};

export default Contact;
