"use client";
import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import NavMenuItems from "./NavMenuItems";
const NavMenu = ({
  handleSetOpen,
  isOpen,
}) => {
  // Combined approach for both overflow and Lenis
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key == "Escape") handleSetOpen(false);
    };
    if (isOpen) {
      // Stop scrolling using both methods
      document.body.style.overflow = "hidden";

      // Force touch-action none on body for mobile
      document.body.style.touchAction = "none";

      document.addEventListener("keyup", handleEscKey);
    } else {
      // Re-enable scrolling using both methods
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.removeEventListener("keyup", handleEscKey);
    };
  }, [isOpen, handleSetOpen]);

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{}}
      className=" bg-accent fixed right-0 top-0 h-screen z-20  overflow-hidden flex flex-col items-center w-screen md:w-fit"
    >
      <div className="flex flex-col items-center  z-50 justify-between h-1/2 my-20 text-3xl text-slate-100 font-light cursor-default">
        <div className="flex justify-around mx-auto px-10 md:px-20 py-16 md:py-20 gap-16 flex-wrap max-w-7xl ">
          <div className="flex flex-col gap-4 lg:gap-8 uppercase font-semibold items-center">
            <NavMenuItems handleSetOpen={handleSetOpen} />
          </div>
        </div>
      </div>
      {/* <p className="text-neutral-300 text-xs md:text-sm absolute bottom-1">
        Benjamin Campbell © 2025
      </p> */}
    </motion.div>
  );
};

export default NavMenu;
