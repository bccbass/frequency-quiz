"use client";
import React from "react";
import { useState, useCallback } from "react";
import NavMenu from "./NavMenu";
import { Cross as Hamburger } from "hamburger-react";

function NavHamburger({ homePage = false } ){
  const [isOpen, setOpen] = useState(false);
  const handleSetOpen = useCallback((value) => {
    setOpen(value);
  }, []);
  return (
    <>
      <div
        role="button"
        aria-label="hamburger-menu-button"
        className={`top-4 right-8 z-50 fixed`}
      >
        <Hamburger
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
          distance="lg"
          rounded
          size={36}
          color={isOpen ? "white" : "var(--color-neutral-200)"}
        />
      </div>
      {isOpen && <NavMenu handleSetOpen={handleSetOpen} isOpen={isOpen} />}
    </>
  );
}

export default NavHamburger;
