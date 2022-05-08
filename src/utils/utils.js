export const sortMenuAndMarkRefIndex = (sections, _lastRefIndex = -1) => {
  // sort sections and items by displayOrder
  // add refIndex for section items and subSection items
  if (!sections?.length) return lastRefIndex;
  sections.sort((a, b) => a.displayOrder - b.displayOrder);
  let lastRefIndex = _lastRefIndex + 1;
  sections.forEach((section) => {
    section.refIndex = lastRefIndex;
    lastRefIndex = sortMenuAndMarkRefIndex(section?.subSections, lastRefIndex);
  });
  return lastRefIndex;
};
