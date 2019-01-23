const initState = {
  userID: null,
  email: null,
  fullname: null,
  isAuth: null
};

const authReducer = (state = initState, action) => {

  switch (action.type) {

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
        id: action.userID
      }

     case 'LOGIN_ERROR':
     return {
       ...state,
       isAuth: false
     } 
    default:
      return state;
  }
}

export default authReducer;