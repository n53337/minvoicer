const GlobalReducer = (state, action) => {
  switch (action.type) {
    // Page Change

    case "PAGE_CHANGE": {
      return { ...state, currentPage: action.payload };
    }

    default:
      return state;
  }
};

export default GlobalReducer;
