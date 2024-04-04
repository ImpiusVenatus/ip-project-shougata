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

    </div>
  );
};

export default ListingCard;
