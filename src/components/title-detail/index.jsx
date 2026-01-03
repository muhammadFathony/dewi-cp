import PageTitle from "../../assets/img/page-title-bg.webp"
const Component = () => {
    const styleCategories = {
        backgroundImage: `url(${PageTitle})`
    }
    return (
        <>
            <div className="page-title dark-background" data-aos="fade" style={styleCategories}>
                <div className="container position-relative">
                    <h1>Portfolio Details</h1>
                    <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Portfolio Details</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Component