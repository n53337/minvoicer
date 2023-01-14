const GlobalReducer = (state, action) => {
  switch (action.type) {
    //

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
