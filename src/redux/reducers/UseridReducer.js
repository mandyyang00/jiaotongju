let UseridState = {
  userId:''
}

export default function UseridReducer(state=UseridState, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN', action)
      return {...state, userId: action.userId}
    default:
      return state
  }
}