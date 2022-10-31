// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Slider = ({featured}) => {
  console.log(featured);
  return (
    <>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
      
        {featured.map(item => (
            
            <SwiperSlide
            key={item.id}
            style={{
                backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .5)100%), url(${item.url})
                `,backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh' ,backgroundRepeat:'no-repeat',
            }}>
            <div className="title" data-swiper-parallax="-300">
                {item.name}
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p className="featured__text">
                    {item.description}
                </p>
            </div>
            <Link to={`/estate`} className="featured__link">Show more</Link>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider