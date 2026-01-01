import Item from "./ServiceItem.jsx";
const Service = () => {
    return (
        <>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-5">
                    {[
                        ...Array(3).keys().map(i => <Item key={i} />)
                    ]}
                </div>
            </div>
        </>
    );
}

export default Service;