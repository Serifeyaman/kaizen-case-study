function handleTabbarAsVisible() {
  return {
    paddingTop: 4,
    paddingBottom: 20,
    height: 75,
    borderTopWidth: 0,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    display: 'flex',
  } as object;
}

export default {
  handleTabbarAsVisible,
};
