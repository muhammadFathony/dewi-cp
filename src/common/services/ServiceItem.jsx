import ServiceImg from "../../assets/img/services-1.jpg";

const ServiceItem = () => {
    return (
        <>
            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="service-item">
                    <div className="img">
                        <img src={ServiceImg} className="img-fluid" alt="" />
                    </div>
                    <div className="details position-relative">
                        <div className="icon">
                            <i className="bi bi-activity"></i>
                        </div>
                        <a href="service-details.html" className="stretched-link">
                            <h3>Nesciunt Mete</h3>
                        </a>
                        <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ServiceItem;