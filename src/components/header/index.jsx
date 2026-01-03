import { Link } from 'react-router-dom';
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
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <Link to="/" className="logo d-flex align-items-center me-auto">
                    {/*  Uncomment the line below if you also wish to use an image logo  */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1 className="sitename">Mitra</h1>
                </Link>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        {navigationItems.map(item => (
                            <li key={item.id}>
                                <a href={`#${item.id}`}
                                   className={activeSection === item.id ? 'active' : ''}
                                   onClick={(e) => handleClick(e, item.id)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div>
        </header>
    );
}
export default Component