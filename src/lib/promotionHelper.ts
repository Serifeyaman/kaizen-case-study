function filterByTagName(tagId: number | string, promotionList: Array<object>) {
  if (promotionList === null || promotionList === undefined) {
    return [];
  }

  if (tagId === 'Fırsat Bul') {
    return promotionList;
  }
  // return promotionList.filter(item => item.Id === tagId);
  return promotionList.filter(item => item.SeoName === 'loyalty-2022');
}

export default {filterByTagName};
