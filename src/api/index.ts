import axios from 'axios';
const BASE_URL = 'https://api.extrazone.com/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    ['X-Country-Id']: 'TR',
    ['X-Language-Id']: 'TR',
  },
});

function getTagList() {
  return instance.get('/tags/list');
}

function getPromotionList() {
  return instance.get('/promotions/list?Channel=PWA');
}

function getPromotionDetail(id: number) {
  return instance.get(`/promotions?Id=${id}`);
}

export default {
  getTagList,
  getPromotionList,
  getPromotionDetail,
};
