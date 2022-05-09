import classNames from "classnames";
import React from "react";
import MenuCard from "./MenuCard";

const MenuSection = (props) => {
  const { section, sectionRefs, onSelectedItem } = props;
  const {
    label,
    description,
    subSections,
    items,
    refIndex,
    disabledReason,
    disabled,
  } = section;

  if (subSections?.length)
    return subSections.map((subSection) => (
      <MenuSection
        key={subSection.label}
        section={subSection}
        sectionRefs={sectionRefs}
        onSelectedItem={onSelectedItem}
      />
    ));
  return (
    <section
      className={classNames("mb-10 relative")}
      ref={(ref) => {
        sectionRefs.current[refIndex] = { current: ref };
      }}
    >
      <h1 className="mb-4 text-2xl" id={`NavBarItem-${refIndex}`}>
        {label}
      </h1>
      {disabledReason && (
        <p className="text-primaryDarkColor">{disabledReason}</p>
      )}
      <div className="mb-4">{description}</div>
      <div className="grid grid-cols-2 mt-4.5 gap-x-3 sm:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 opacity-100">
        {items.map((item) => (
          <MenuCard
            key={item.label}
            menuItem={item}
            onClick={() => (disabled ? null : onSelectedItem(item))}
            disabled={disabled}
          />
        ))}
      </div>
      {disabled && (
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-30 bg-[#fff] z-50" />
      )}
    </section>
  );
};

export default MenuSection;
