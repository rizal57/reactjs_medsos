const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        authUser: action.payload
      }
    case 'LOGOUT':
      return {
        authUser: null
      }
    default:
      return state;
  }
}

export default AuthReducer;
