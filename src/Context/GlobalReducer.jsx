const GlobalReducer = (state, action) => {
  switch (action.type) {
    //

    // * Pages State

    case "PAGE_CHANGE": {
      return { ...state, currentPage: action.payload };
    }

    // * User State

    case "LOGIN": {
      return { ...state, user: action.payload };
    }

    case "LOGOUT": {
      localStorage.setItem("loggedIn", false);
      return { ...state, user: null };
    }

    default:
      return state;
  }
};

export default GlobalReducer;
