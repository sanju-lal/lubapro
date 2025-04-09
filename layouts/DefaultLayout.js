import React from "react";

// import { Modal } from "antd";
// import { IoCloseCircleOutline } from "react-icons/io5";

import Footer from "../components/pages/landing/Footer";

// import PosterModal from "../components/common/PosterModal";

export default function DefaultLayout({ children }) {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // useEffect(() => {
  //   const hasSeenModal = localStorage.getItem("hasSeenModal");
  //   if (!hasSeenModal) {
  //     const timer = setTimeout(() => {
  //       setIsModalVisible(true);
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  // const handleCloseModal = () => {
  //   localStorage.setItem("hasSeenModal", "true");
  //   setIsModalVisible(false);
  // };

  const scrollToTop = (behavior = "smooth") => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  };
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="flex-grow p-2 md:px-5 md:py-5">{children}</div>
      <div className="mt-auto px-2 md:px-5">
        <Footer />
      </div>
    </div>
  );
}
