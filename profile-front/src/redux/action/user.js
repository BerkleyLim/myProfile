const InitState = {
  userId: undefined,
  userNm: undefined,
  nickNm: undefined,
  role_admin: undefined,
  user_company: undefined,
}

const userReducer = (state = InitState, action) => {
  switch (action.type) {
    case "setUser": 
      return { ...state, 
      userId: (!!action.userId) ? state.userId : action.userId,
      userNm:(!!action.userNm) ? state.userNm : action.userNm,
      nickNm:(!!action.nickNm) ? state.nickNm : action.nickNm,
      role_admin:(!!action.role_admin) ? state.role_admin : action.role_admin,
      user_company:(!!action.user_company) ? state.user_company : action.user_company,
    };
    case "getUser":
      return { ...state };
    default:
      return state;
  }
}

export default userReducer;