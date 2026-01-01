import Hero from "../../components/hero/Index"
const Component = () => {
    return (
        <>
            {/* <!-- Hero Section --> */}
            <Hero />
            {/* /Hero Section */}

            {/* About Section */}
            <section id="about" className="about section">

                <div className="container">

                    <div className="row gy-4">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3>Voluptatem dignissimos provident laboris nisi ut aliquip ex ea commodo</h3>
                            <img src="assets/img/about.jpg" className="img-fluid rounded-4 mb-4" alt="" />
                            <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
                            <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                            <div className="content ps-0 ps-lg-5">
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                </p>

                                <div className="position-relative mt-4">
                                    <img src="assets/img/about-2.jpg" className="img-fluid rounded-4" alt="" />
                                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            {/* /About Section */}

            {/* Stats Section */}
            <section id="stats" className="stats section light-background">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        {/* End Stats Item */}

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                        {/* End Stats Item */}

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-headset color-green flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hours Of Support</p>
                                </div>
                            </div>
                        </div>
                        {/* End Stats Item */}

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-people color-pink flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hard Workers</p>
                                </div>
                            </div>
                        </div>
                        {/* End Stats Item */}

                    </div>

                </div>

            </section>
            {/* /Stats Section */}

            {/* Services Section */}
            <section id="services" className="services section">

                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>Featured Srvices<br></br></p>
                </div>
                {/* End Section Title */}

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-5">

                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-item">
                                <div className="img">
                                    <img src="assets/img/services-1.jpg" className="img-fluid" alt="" />
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
                        {/* End Service Item */}

                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="service-item">
                                <div className="img">
                                    <img src="assets/img/services-2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-broadcast"></i>
                                    </div>
                                    <a href="service-details.html" className="stretched-link">
                                        <h3>Eosle Commodi</h3>
                                    </a>
                                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Service Item */}

                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                            <div className="service-item">
                                <div className="img">
                                    <img src="assets/img/services-3.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <a href="service-details.html" className="stretched-link">
                                        <h3>Ledo Markt</h3>
                                    </a>
                                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Service Item */}

                    </div>

                </div>

            </section>
            {/* /Services Section */}
        </>
    );
}
export default Component