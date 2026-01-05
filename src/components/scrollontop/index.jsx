import { useState, useEffect } from 'react';
import $ from 'jquery';
const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smooth
    const scrollToTop = () => {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    };
    return (
        <>
            {isVisible && (
                <a
                    className={`scroll-top d-flex align-items-center justify-content-center ${!isVisible ? '' : 'active'}`}
                    onClick={scrollToTop}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="bi bi-arrow-up-short" style={{ lineHeight: 'unset' }}></i>
                </a>
            )}
        </>
    )
}

export default ScrollTop