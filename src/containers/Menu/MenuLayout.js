import React, { useRef } from "react";
import NavBar from "../../components/NavBar";
import useScrollSpy from "react-use-scrollspy";

const MenuLayout = ({ menuList }) => {
  const sectionRefs = new Array(menuList.length).fill(useRef(null));

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <p>Our Menu</p>
        <NavBar menuList={menuList} activeSection={activeSection} />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default MenuLayout;
