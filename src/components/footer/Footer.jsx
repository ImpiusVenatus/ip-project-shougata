import "./Footer.css";

const Footer = () => {
  return ( 
  <div className="footer">
    <div className="container">
      <div className="aboutUs">
        <h1>Roamscape</h1>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper augue non neque congue, nec fermentum nunc posuere.</p>
        <div className="social_media_icons">
          <a href="#" className="facebook">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="#" className="twitter">
            <i className="ri-twitter-fill"></i>
          </a>
          <a href="#" className="instagram">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </div>
      </div>
      <div className="support">
        <h3>Support</h3>
        <a href="#">FAQ</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Help</a>
      </div>
      <div className="contact us">
        <h3>Contact Us</h3>
        <p>
        <i className="ri-phone-fill"></i>
        +123-456-7890
        </p>
        <p>
        <i className="ri-mail-fill"></i>
        roamscape@gmail.com
        </p>
      </div>
    </div>
  </div>
  )
};

export default Footer;
