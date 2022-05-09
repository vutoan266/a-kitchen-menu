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
