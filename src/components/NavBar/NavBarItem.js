import classNames from "classnames";
import React from "react";

const NavBarItem = ({ label, refIndex, isActive }) => {
  return (
    <li
      className={classNames(
        "p-2 border-l-2 border-solid border-grey cursor-pointer",
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
