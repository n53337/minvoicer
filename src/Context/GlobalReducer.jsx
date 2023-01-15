const GlobalReducer = (state, action) => {
  switch (action.type) {
    //

    // * User State

    case "LOGIN": {
      localStorage.setItem("currUser", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    }

    case "REGISTER": {
      localStorage.setItem("currUser", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    }

    case "LOGOUT": {
      localStorage.setItem("currUser", "");
      return { ...state, user: null };
    }

    case "UPDATE": {
      return { ...state, user: { ...state.user, ...action.payload } };
    }

    default:
      return state;
  }
};

export default GlobalReducer;
