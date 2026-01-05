import TestimoniSlider from "../../common/swiper/Swiper"
const Testimoni = () => {
    return (
        <>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
               <TestimoniSlider data={[1,2,3,4]} imageType="testimonials" />
            </div>
        </>
    )
}

export default Testimoni