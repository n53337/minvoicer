const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "TEST": {
      return "test";
    }

    default:
      return state;
  }
};

export default GlobalReducer;
