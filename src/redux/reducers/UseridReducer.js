let UserId = {
  userId:''
}

export default function UseridReducer(state=UserId, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN', action)
      return {...state, userId: action.userId}
    default:
      return state
  }
}