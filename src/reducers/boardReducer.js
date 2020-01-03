import initialState from '../initialState';

const boardReducer = (state = initialState.board, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default boardReducer;
