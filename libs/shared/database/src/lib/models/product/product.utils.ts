export function renameFilterKeysRelatedToCategories(filter: unknown) {
  if (typeof filter === 'object' && filter !== null) {
    const filterEntires = Object.entries(filter).map(([key, value]) => {
      if (key.includes('subCategory.category.')) {
        key = key.replace('subCategory.category.', '_subCategory._category.');
        return [key, value];
      }

      if (key.includes('subCategory.')) {
        key = key.replace('subCategory.', '_subCategory.');
        return [key, value];
      }

      return [key, value];
    });

    return Object.fromEntries(filterEntires);
  }

  return {};
}
