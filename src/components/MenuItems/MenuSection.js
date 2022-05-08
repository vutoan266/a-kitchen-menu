import React from "react";
import MenuCard from "./MenuCard";
// import classNames from "classnames";

const MenuSection = (props) => {
  const { section, sectionRefs } = props;
  const { label, description, subSections, items, refIndex } = section;

  if (subSections?.length)
    return subSections.map((subSection) => (
      <MenuSection
        key={subSection.label}
        section={subSection}
        sectionRefs={sectionRefs}
      />
    ));
  return (
    <section
      className="mb-10"
      ref={(ref) => {
        sectionRefs.current[refIndex] = { current: ref };
      }}
    >
      <h1 className="mb-4 text-2xl" id={`NavBarItem-${refIndex}`}>
        {label}
      </h1>
      <div className="mb-4">{description}</div>
      <div className="grid grid-cols-2 mt-4.5 gap-x-3 sm:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 opacity-100">
        {items.map((item) => (
          <MenuCard key={item.label} menuItem={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
