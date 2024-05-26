import "./ListingDetails.css";
import img1 from "../../assets/listings/Brazil-1.webp";
import img2 from "../../assets/listings/Brazil-2.webp";

const ListingDetails = () => {
  return (
    <div className="listing-details">
      <div className="container">
        <div className="details-content">
          <h1 className="house-title">Cozy House in the City</h1>
          <div className="house-images">
            <img src={img1} alt="House 1 Image 1" />
            <img src={img2} alt="House 1 Image 2" />
            {/* Add more images as needed */}
          </div>
          <p className="house-subtitle">
            Experience the charm of a city home with all the comforts of home.
          </p>
          <p className="house-info">
            5 guests · 2 bedrooms · 2 beds · 1.5 baths
          </p>
          <div className="house-details-section">
            <h2>House Details</h2>
            <p>
              Nestled in the heart of the city, this cozy house offers a unique
              blend of urban living and home comforts. With a spacious living
              room that opens to a modern kitchen, you will find everything you
              need to prepare your meals. The private bathroom ensures a
              refreshing start to your day, while the private patio offers a
              serene space to unwind. Perfect for families or couples, the house
              provides a comfortable and memorable stay with elegant city views.
            </p>
            <p>
              The house features a fully equipped kitchen with all the
              essentials, including a dishwasher, microwave, and a selection of
              cookware. The living room is furnished with comfortable sofas and
              a large flat-screen TV, ideal for relaxing after exploring the
              city. The private patio offers a serene space to unwind, with a
              breathtaking view of the city skyline.
            </p>
          </div>
          <div className="house-testimonials">
            <h2>What Our Guests Say</h2>
            <div className="testimonial">
              <p>
                This house was exactly what we were looking for. The host was
                very welcoming, and the house was clean and comfortable. We had
                a great time exploring the city and enjoyed our stay. - Jane D.
              </p>
            </div>
            <div className="testimonial">
              <p>
                We had a wonderful stay in this house. The location was perfect,
                and the host was very helpful. We highly recommend this house
                for anyone visiting the city. - John S.
              </p>
            </div>
          </div>
          <div className="house-details">
            <div className="host-details">
              <h2>About the Host</h2>
              <p>
                Host Name is a local resident who loves sharing their home with
                travelers. They are passionate about providing a comfortable and
                memorable stay.
              </p>
              {/* Add more host details as needed */}
            </div>
          </div>
          <div className="house-facilities">
            <h2>Facilities</h2>
            <ul>
              <li>Free Wi-Fi</li>
              <li>Air Conditioning</li>
              <li>Kitchen</li>
              <li>Parking</li>
              {/* Add more facilities as needed */}
            </ul>
          </div>
          <div className="things-to-know">
            <h2>Things to Know</h2>
            <div className="rules-safety">
              <h3>Rules & Safety</h3>
              <ul>
                <li>No smoking inside the house.</li>
                <li>Pets are allowed with prior permission.</li>
                <li>Quiet hours are from 10 PM to 7 AM.</li>
                {/* Add more rules and safety information as needed */}
              </ul>
            </div>
            <div className="cancellation-policy">
              <h3>Cancellation Policy</h3>
              <p>
                If you need to cancel your booking, please do so at least 48
                hours in advance. Cancellations made within 48 hours of the
                check-in date will be subject to a full refund minus a $20
                cancellation fee. In the event of an emergency, please contact
                the host directly.
              </p>
            </div>
          </div>
        </div>
        <div className="booking-form-card">
          <form>
            <label htmlFor="check-in">Check-in:</label>
            <input type="date" id="check-in" name="check-in" />
            <label htmlFor="check-out">Check-out:</label>
            <input type="date" id="check-out" name="check-out" />
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" max="10" />
            <p>Price: $100 per night</p>
            <button type="submit">Reserve</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
