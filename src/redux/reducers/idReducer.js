let idState = {
  userId:
}

export default function idReducer(state=idState, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN', action)
      return {...state, isAuthenticated: true, currentUser: action.username}
    case 'LOG_OUT':
      return state;
    default:
      return state
  }
}