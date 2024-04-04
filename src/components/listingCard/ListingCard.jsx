import "./ListingCard.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import image1 from "../../assets/listings/paris-1.webp";
import image2 from "../../assets/listings/paris-2.webp";
import image3 from "../../assets/listings/paris-3.webp";
import image4 from "../../assets/listings/thai-1.webp";
import image5 from "../../assets/listings/thai-2.webp";
import image6 from "../../assets/listings/thai-3.webp";
import image7 from "../../assets/listings/indo-1.webp";
import image8 from "../../assets/listings/indo-2.webp";
import image9 from "../../assets/listings/indo-3.webp";
import image10 from "../../assets/listings/esp-1.webp";
import image11 from "../../assets/listings/esp-2.webp";
import image12 from "../../assets/listings/esp-3.webp";
import image13 from "../../assets/listings/ind-1.webp";
import image14 from "../../assets/listings/ind-2.webp";
import image15 from "../../assets/listings/ind-3.webp";
import image16 from "../../assets/listings/Brazil-1.webp";
import image17 from "../../assets/listings/Brazil-2.webp";
import image18 from "../../assets/listings/Brazil-3.webp";
import image19 from "../../assets/listings/jam-1.webp";
import image20 from "../../assets/listings/jam-2.webp";
import image21 from "../../assets/listings/jam-3.webp";
import image22 from "../../assets/listings/jor-1.webp";
import image23 from "../../assets/listings/jor-2.webp";
import image24 from "../../assets/listings/jor-3.webp";
import image25 from "../../assets/listings/geo-1.webp";
import image26 from "../../assets/listings/geo-2.webp";
import image27 from "../../assets/listings/geo-3.webp";

const ListingCard = () => {
  return (
    <div className="listingCard">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
      </Swiper>
      <h2>Condo in Paris</h2>
      <p>Dedicated Worksapce</p>
      <p>$1800 month</p>


      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} />
        </SwiperSlide>
      </Swiper>
      <h2>Chang Mai, Thailand</h2>
      <p>Entire villa with a pool </p>
      <p>$1400 month</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} />
        </SwiperSlide>
      </Swiper>
      <h2>Treehouse in Klungkung, Indonesia</h2>
      <p>Cliffside Bamboo Treehouse - Private Pool & View</p>
      <p>$2000 month</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image12} />
        </SwiperSlide>
      </Swiper>
      <h2>Cave in Los Balcones, Spain</h2>
      <p>Cave Granado. Guadix. Granada</p>
      <p>$1600 month</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image13} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image14} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image15} />
        </SwiperSlide>
      </Swiper>
      <h2>Room in Kalimpong, India</h2>
      <p>Cozy bedroom-TV/Wi-Fi & mountain view</p>
      <p>$1200 month</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image16} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image17} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image18} />
        </SwiperSlide>
      </Swiper>
      <h2>Entire bungalow in Saquarema, Brazil</h2>
      <p>Bungalow with Private Pool</p>
      <p>$900 month</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image19} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image20} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image21} />
        </SwiperSlide>
      </Swiper>
      <h2>Villa in Montego Bay, Jamaica</h2>
      <p>Bedroom Oceanview Villa with Free Breakfast</p>
      <p>$2800 month</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image22} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image23} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image24} />
        </SwiperSlide>
      </Swiper>
      <h2>Mohammed Mutlak Camp</h2>
      <p>Private room in tent in Wadi Rum Village, Jordan</p>
      <p>$1300 month</p>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image25} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image26} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image27} />
        </SwiperSlide>
      </Swiper>
      <h2>Entire cabin in Saguramo, Georgia</h2>
      <p>Amazing 2 bedroom Cottage with Jacuzzi</p>
      <p>$1000 month</p>

    </div>
  );
};

export default ListingCard;
