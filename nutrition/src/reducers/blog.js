const INITIAL_STATE = { blogs: null, popular_blogs: null };

export const BlogsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "POPULAR_BLOGS":
      return {
        ...state,
        popular_blogs: [...action.payload]
      };
    default:
      return state;
  }
};
