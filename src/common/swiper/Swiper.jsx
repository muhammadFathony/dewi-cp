import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay, } from 'swiper/modules';
import Portofolio1 from "../../assets/img/portfolio/app-1.jpg"
const Slider = ({ className, data, loading = true, imageType = 'image' }) => {
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
                            {imageType === 'image' ? (
                                <img src={Portofolio1} alt=""></img>
                            ) : imageType === 'background' ? (
                                <div className="banner2-item" style={{ backgroundImage: `url()` }}></div>
                            ) : (
                                <div class="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <div class="stars">
                                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i class="bi bi-quote quote-icon-left"></i>
                                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                        <i class="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
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