import "./ListingCard.css";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ListingCard = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/listings");
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="listingsContainer">
      {listings.map((listing) => (
        <div key={listing._id} className="listingCard">
          <Swiper
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {listing.photo.map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={photo}
                  alt={`Listing ${listing._id} slide ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="listingDetails">
            <h4>
              <i className="ri-map-pin-2-line"></i> {listing.city}
            </h4>
            <h2>{listing.title}</h2>
            <span>${listing.price} month</span>
            <div className="btn-group">
              <a href="/details">
                <button>Click for details</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingCard;
