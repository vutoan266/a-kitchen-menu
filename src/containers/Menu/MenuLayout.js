import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import useScrollSpy from "react-use-scrollspy";
import MenuSection from "../../components/MenuItems/MenuSection";
import Modal from "../../components/commons/Modal";
import DetailMenuItemModal from "../../components/CustomModal/DetailMenuItemModal";

const MenuLayout = ({ menuList }) => {
  const sectionRefs = React.useRef([]);
  const [selectedItem, setSelectedItem] = useState();

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs.current,
    offsetPx: -80,
  });

  return (
    <div className="grid grid-cols-5">
      <div className="md:col-span-1 col-span-5">
        <p className="text-center md:text-left text-3xl mb-5">Our Menu</p>
        <NavBar menuList={menuList} activeSection={activeSection} />
      </div>
      <div className="md:col-span-4 col-span-5 pl-3 pr-3">
        {menuList.map((section) => (
          <MenuSection
            key={section.label}
            section={section}
            sectionRefs={sectionRefs}
            onSelectedItem={setSelectedItem}
          />
        ))}
      </div>
      {selectedItem && (
        <DetailMenuItemModal
          menuItem={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default MenuLayout;
