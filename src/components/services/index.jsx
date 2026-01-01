import Services from "../../common/services/Service"
const Component = () => {
    return (
        <>
            <section id="services" className="services section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>Featured Srvices<br></br></p>
                </div>
                < Services />
                {/* End Section Title */}
            </section>
        </>
    );
}
export default Component;