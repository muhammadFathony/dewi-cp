import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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
        },
        modules: [Autoplay, Pagination]
    };
    const getBannerImageUrl = (domain, path, image) => {
        const cleanPath = path.replace('./public/', '');
        const imagePath = `${cleanPath}/${image}`;
        return imagePath;
    }
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
            </Swiper>
        </>
    )
}

export default Slider