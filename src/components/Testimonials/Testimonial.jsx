import React from "react";
import "./testomonial.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import Avtr4 from "../../assets/avatar4.jpg";
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';










const data = [
  {
    avatar: Avtr1,
    name: "Rita",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit animi odio dolorum ipsam minima unde impedit dolor quisquam maxime",
  },
  {
    avatar: Avtr2,
    name: "Hari",
    review:
      " ipsum dolor sit amet consectetur adipisicing elit. Ex sit animi odio dolorum ipsam minima unde impedit dolor quisquam maxime",
  },
  {
    avatar: Avtr3,
    name: "Ram",
    review:
      "Ex sit animi odio dolorum ipsam minima unde impedit dolor quisquam maxime",
  },
  {
    avatar: Avtr4,
    name: "Gita",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit animi odio dolorum ipsam minima unde impedit dolor quisquam maxime",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonial">
      <h4>Review From Clients</h4>
      <h2>Tesstimonial</h2>
      <Swiper className="container testomonials__container" 
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {
         data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
            <h5 className="client__name">{name}</h5>
           <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
          )
         })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
