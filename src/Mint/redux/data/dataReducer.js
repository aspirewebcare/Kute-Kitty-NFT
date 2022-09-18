const initialState = {
  loading: false,
  name: "",
  totalSupply: 0,
  cost: 0,
  error: false,
  type: "",
  errorMsg: "",
  ownerTokens: 0,
  transactions: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        totalSupply: action.payload.totalSupply,
        cost: action.payload.cost,
        type: action.payload.type,
        ownerTokens: action.payload.ownerTokens,
        transactions: action.payload.transactions,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
