import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay, } from 'swiper/modules';
import Portofolio1 from "../../assets/img/portfolio/app-1.jpg"
const Slider = ({ className, data, loading = true, img = true }) => {
    const swiperConfig = {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className}" style="background-color: #daceca;"></span>`;
            },
        },
        modules: [Autoplay, Pagination],

    };
    return (
        <>
            <Swiper className={className} {...swiperConfig}>
                {
                    data.length > 0 ? data.map((value, index) => (
                        <SwiperSlide key={index}>
                            {img ? (
                                <img src={Portofolio1} alt=""></img>
                            ) : (
                                <div className="banner2-item" style={{ backgroundImage: `url()` }}></div>
                            )
                            }
                        </SwiperSlide>
                    )) : ''
                }
                <div className="swiper-pagination"></div>
            </Swiper>
            <style>{`
                .swiper-pagination-bullet-active {
                    background-color: #ff4a17 !important;
                }
            `}</style>
        </>
    )
}

export default Slider