import classNames from "classnames";
import React from "react";

const NavBarItem = ({ label, refIndex, isActive }) => {
  return (
    <li
      className={classNames(
        "p-2 cursor-pointer border-b-2 md:border-l-2 md:border-b-0 border-solid border-grey",
        {
          "border-primaryColor": isActive,
        }
      )}
      onClick={() =>
        document.getElementById(`NavBarItem-${refIndex}`).scrollIntoView(true)
      }
    >
      {label}
    </li>
  );
};

export default NavBarItem;
