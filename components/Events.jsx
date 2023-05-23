import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PopupBox from "./Event_popup";

const Events = ({
  heading, 
  small_disc, 
  i_link,
  reference,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleCardClick = () => { setShowPopup(true) };
  const handleClosePopup = () => { setShowPopup(false) };
  return (
    <div className="hover:-translate-y-2 transition-all duration-300 h-100 w-100 inline-block hover:bg-[#AFD3E2]/90 shadow-md rounded-md hover:text-black text-black/90 m-[25px]">
      <div className="flex flex-col m-[10px]">
        <div className="m-[3px]">
          <h4 text-sky-900 text-xl>{heading}</h4>
        </div>
        <div className="image md:block hidden shadow-lg m-[3px]">
          <Image 
            src = {
              i_link
                ? i_link
                : "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            }
            height="250"
            width="250"
            alt="heading-image"
          />
        </div>
      </div>
      {showPopup && <PopupBox onClose={handleClosePopup} />}
    </div>
  );
};

export default Events;
