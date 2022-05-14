import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button className="pl-2">
      <FaArrowUp
        // className="fa-1x"
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          backgroundColor: "rgba(90, 92, 105, 0.5)",
          borderRadius: 5,
          fontSize: "40px",
          paddingRight: 10,
          paddingLeft: 10,
        }}
      />
    </Button>
  );
};

export default ScrollButton;
