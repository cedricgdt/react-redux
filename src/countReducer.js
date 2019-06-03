const lightReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD1':
      return state + 1;
    case 'REMOVE1':
      return state - 1;
    case 'ADD10':
      return state + 10;
    case 'REMOVE10':
      return state - 10;
    case 'RESET':
      state = 0;
      return state;
    default:
      return state;
  }
};
export default lightReducer;