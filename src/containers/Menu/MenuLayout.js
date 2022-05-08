import React, { useRef } from "react";
import NavBar from "../../components/NavBar";
import useScrollSpy from "react-use-scrollspy";
import MenuSection from "../../components/MenuItems/MenuSection";

const MenuLayout = ({ menuList }) => {
  const sectionRefs = React.useRef([]);

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs.current,
    offsetPx: -80,
  });

  console.log(sectionRefs.current, activeSection);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <p className="text-3xl mb-5">Our Menu</p>
        <NavBar menuList={menuList} activeSection={activeSection} />
      </div>
      <div className="col-span-4">
        {menuList.map((section) => (
          <MenuSection
            key={section.label}
            section={section}
            sectionRefs={sectionRefs}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuLayout;
