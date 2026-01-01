// hooks/useSectionNavigation.js
import { useEffect, useState } from "react";

export const useSectionNavigation = (sectionIds = []) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

    useEffect(() => {
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    window.history.pushState(null, '', `#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, [sectionIds]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    return { activeSection, scrollToSection };
};