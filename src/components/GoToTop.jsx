import React, { useEffect, useState } from "react";
const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
        left: 0,
      behavior: "smooth",
    });
  };
  const listenToScroll = () => {
    let heighToHiden = 500;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heighToHiden) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  }
useEffect(()=>{
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
},[])
  return (
    <>
    {isVisible && (<button
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded z-10 cursor-pointer shadow-lg hover:bg-blue-600 transition-colors duration-200"
      onClick={scrollToTop}
    >
      ↑
    </button>)}
    </>
  );
}

export default GoToTop;