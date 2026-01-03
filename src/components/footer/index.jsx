import { useSectionNavigation } from '../../hooks/useSectionNavigation';
import { navigationItems } from '../../config/navigation';

const Component = () => {
    const sectionIds = navigationItems.map(item => item.id);
    const { activeSection, scrollToSection } = useSectionNavigation(sectionIds);

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
        window.history.pushState(null, '', `#${sectionId}`);
    };
    return (
        <>
            <footer id="footer" className="footer dark-background">
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">Mitra</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                                <p><strong>Email:</strong> <span>info@example.com</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                {navigationItems.map(item => (
                                    <li key={item.id}>
                                        <i className="bi bi-chevron-right"></i>
                                        <a href={`#${item.id}`}
                                            onClick={(e) => handleClick(e, item.id)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Mitra Teknik</strong> <span>All Rights Reserved</span></p>
                </div>

            </footer>
        </>
    );
}
export default Component