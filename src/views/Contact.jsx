import "../styles/Contact.css";
import dp from "../assets/shougata.jpg";

const contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Welcome to our Roamscape! We aim to provide a seamless and enjoyable
        experience for both hosts and guests. Whether you&apos;re looking to
        find a cozy place to stay or you want to share your own space with
        travelers, we have you covered. Our platform is designed to be
        user-friendly, secure, and packed with features to help you make the
        most out of your travel experience.
      </p>
      <div className="card">
        <img src={dp} alt="Profile" className="profile-image" />
        <div className="details">
          <h2>Shougata Paul</h2>
          <p>Department: Computer Science and Engineering</p>
          <p>ID: 2004087</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
