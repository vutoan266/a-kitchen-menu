export const sortMenuAndMarkRefIndex = (sections, _lastRefIndex = -1) => {
  // sort sections and items by displayOrder
  // add refIndex for "section with items" and "subSection items"
  if (!sections?.length) return _lastRefIndex;
  sections.sort((a, b) => a.displayOrder - b.displayOrder);
  let lastRefIndex = _lastRefIndex;
  sections.forEach((section) => {
    if (section?.subSections?.length) {
      lastRefIndex = sortMenuAndMarkRefIndex(
        section?.subSections,
        lastRefIndex
      );
    } else {
      section.refIndex = ++lastRefIndex;
    }
  });
  return lastRefIndex;
};
