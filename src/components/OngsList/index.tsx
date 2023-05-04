import { useContext } from "react";
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { OngsContext } from "../../providers/OngsContext";
import OngsCard from "./OngCard";

export const OngsList = () => {
  const { listCard, filteredOng } = useContext(OngsContext);
  const listToRender = filteredOng.length > 0 ? filteredOng : listCard

  return (
    <Swiper
    modules={[Navigation, Pagination]}
    autoplay={{delay:1000}}
    navigation={true}
    pagination={{clickable:true}}
    loop={true}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    }}
    >
      {listToRender.map((ong) => {
        return (
          <SwiperSlide key={ong.id}>
            <OngsCard ong={ong}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
