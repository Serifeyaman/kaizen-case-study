function filterByTagName(tagId: number | string, promotionList: Array<object>) {
  if (promotionList === null || promotionList === undefined) {
    return [];
  }

  if (tagId === 'Fırsat Bul') {
    return promotionList;
  }

  // TODO
  // Endpointten dönen tag listesinde tagName e denk gelen bir alan bulunmadığı için tag lere göre filtreleme yapılamadı.
  // Bunun yerine filtereme logic kısmını anlatabilmek adına SeoName alanı kullanılarak filtreleme oluşturuldu.
  // Bu sayede hangi tag a tıklanırsa tıklansın promotion SeoName değeri 'loyalty-2022' olan promosyonlar listelenir.
  // return promotionList.filter(item => item.Id === tagId);

  return promotionList.filter((item: any) => item.SeoName === 'loyalty-2022');
}

export default {filterByTagName};
