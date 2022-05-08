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

export default NavBarItem;
