import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./carousel.css";
import simulator from "../images/main/carousel/simulator.png";
import newsclipping from "../images/main/carousel/newsclipping.png";
import tetris from "../images/main/carousel/tetris.jpeg";
import imscareddd from "../images/main/carousel/imscareddd.png";
import baekjoon from "../images/main/carousel/baekjoon.png";
import CardNewsReact from "../images/main/carousel/CardNewsReact.png";
import horror_react from "../images/main/carousel/horror_react.png";

const items = [
  {
    id: 0,
    url: "https://github.com/forif-web/frontend",
    imgUrl: simulator,
    name: "학부생 시뮬레이터",
    isHovered: 0,
  },
  {
    id: 1,
    url: "https://newsclipping-csr.co.kr/",
    imgUrl: newsclipping,
    name: "News Clipping",
    isHovered: false,
  },
  {
    id: 2,
    url: "https://github.com/ajinjink/tetris_py",
    imgUrl: tetris,
    name: "파이썬 테트리스",
    isHovered: false,
  },
  {
    id: 3,
    url: "https://github.com/ImScareddd",
    imgUrl: imscareddd,
    name: "날랑말랑",
    isHovered: false,
  },
  {
    id: 4,
    url: "https://solved.ac/en/profile/forif",
    imgUrl: baekjoon,
    name: "롤 골 백 골",
    isHovered: false,
  },
  {
    id: 5,
    url: "https://github.com/starlike6617/FORIF_React-study",
    imgUrl: CardNewsReact,
    name: "리액트 깨물어 먹기",
    isHovered: false,
  },
  {
    id: 6,
    url: "https://github.com/DonghyunKim98/horror-web-forif-21-1",
    imgUrl: horror_react,
    name: "리액트 공포 게임",
    isHovered: false,
  },
];
function Carousel() {
  const [imageHover, setImageHover] = useState(items.map(() => false));
  const handleImageHover = (idx) => {
    setImageHover((prev) => {
      const newHoverStates = [...prev];
      newHoverStates[idx] = true;
      return newHoverStates;
    });
  };

  const handleImageUnhover = (idx) => {
    setImageHover((prev) => {
      const newHoverStates = [...prev];
      newHoverStates[idx] = false;
      return newHoverStates;
    });
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={"auto"}
      centeredSlides={false}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} >
          <a href={item.url} target="_blank" >
            <div
              className="carousel_container"
              style={{
                backgroundImage: `url('${item.imgUrl}')`,
              }}
              onMouseEnter={() => handleImageHover(item.id)}
              onMouseLeave={() => handleImageUnhover(item.id)}
            >
              {imageHover[item.id] && <h2>{item.name}</h2>}
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
