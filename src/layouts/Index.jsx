import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Index.jsx";
import Header from "../components/header/Index.jsx";

const Component = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
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
    </>
  );
}

export default Component