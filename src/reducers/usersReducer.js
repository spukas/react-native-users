const initialState = [];

export default (state = initialState, action) => {
  switch (action) {
    case 'some_action':
      return [...state, action.payload];
    default:
      return initialState;
  }
};
