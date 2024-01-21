const initialState = {
  tags: [],
  promotionList: [],
  promotionDetail: {},
};

const promotionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TAGS':
      return {
        ...state,
        tags: action.tags,
      };
    case 'GET_PROMOTION_LIST':
      return {
        ...state,
        promotionList: action.promotionList,
      };
    case 'GET_PROMOTION_DETAIL':
      return {
        ...state,
        promotionDetail: action.promotionDetail,
      };
    default:
      return state;
  }
};

export default promotionReducer;
