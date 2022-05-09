import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = (props) => {
  const { menuList, activeSection } = props;

  return (
    <ul className="sticky top-0 overflow-x-auto menu-bar">
      <div className="flex md:flex-col min-w-max">
        {menuList.map((section) => {
          if (section.subSections?.length) {
            return section.subSections.map((subSection) => {
              const { label, refIndex } = subSection;
              return (
                <NavBarItem
                  key={`${section.label} / ${label}`}
                  label={
                    <>
                      <div>{section.label} /</div>
                      <div></div>
                      {label}
                    </>
                  }
                  refIndex={refIndex}
                  isActive={activeSection === refIndex}
                />
              );
            });
          }
          return (
            <NavBarItem
              key={section.label}
              label={section.label}
              refIndex={section.refIndex}
              isActive={activeSection === section.refIndex}
            />
          );
        })}
      </div>
    </ul>
  );
};

export default NavBar;
