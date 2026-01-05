import SwiperTestimonials from "../../common/testimonials/Testimoni"
import ImgTestimoni from "../../assets/img/testimonials-bg.jpg"
const Component = () => {
    return (
        <>
            <section id="testimonials" className="testimonials section dark-background">
                <img src={ImgTestimoni} className="testimonials-bg" alt="" />
                    <SwiperTestimonials />
            </section>
        </>
    )
}
export default Component