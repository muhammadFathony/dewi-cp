import TitleDetail from "../../../components/title-detail"
import SwiperDetail from "../../../common/swiper/Swiper"
import ProjectInformation from "../../../components/project-information"
const Component = () => {
    return (
        <>
            <TitleDetail />
            <section id="portfolio-details" className="portfolio-details section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <SwiperDetail data={['1', '2', '3']} className="portfolio-details-slider" imageType="image" />
                        </div>
                        <ProjectInformation />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Component