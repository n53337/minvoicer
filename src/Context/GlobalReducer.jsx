const GlobalReducer = (state, action) => {
  switch (action.type) {
    //

    // * Pages State

    case "PAGE_CHANGE": {
      return { ...state, currentPage: action.payload };
    }

    // * User State

    case "LOGIN": {
      localStorage.setItem("currUser", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    }

    case "LOGOUT": {
      localStorage.setItem("currUser", null);
      return { ...state, user: null };
    }

    default:
      return state;
  }
};

export default GlobalReducer;
