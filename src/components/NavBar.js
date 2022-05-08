import classNames from "classnames";
import React from "react";

const NavBarItem = ({ label, refIndex, isActive }) => {
  return (
    <a href={`#NavBarItem-${refIndex}`}>
      <li
        className={classNames("p-1 border-l-2 border-solid border-grey", {
          "border-primaryColor": isActive,
        })}
      >
        {label}
      </li>
    </a>
  );
};

const NavBar = (props) => {
  const { menuList, activeSection } = props;

  return (
    <ul className="">
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
    </ul>
  );
};

export default NavBar;
