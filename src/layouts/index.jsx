import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Aos from "aos"
import Footer from "../components/footer"
import Header from "../components/header"
import Scroll from "../components/scrollontop"

const Component = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
        document.body.classList.add('scrolled');
      } else {
        setIsScroll(false);
        document.body.classList.remove('scrolled');
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove('scrolled');
    };
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default Component