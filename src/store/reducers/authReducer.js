const initState = {
  userID: null,
  email: null,
  fullname: null,
  isAuth: null,
  name: null,
  surname: null

};

const authReducer = (state = initState, action) => {

  switch (action.type) {

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
        id: action.userID,

      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        isAuth: false,
        id: null,
        name: null,
        surname: null
      }

    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        id: null,
        userID: null,
        email: null,
        fullname: null,
        isAuth: false,
        name: null,
        surname: null

      }

    case 'FETCH_USER':
      return {
        ...state,
        isAuth: true,
        userID: action.userID
      }

    case 'FETCH_NO_USER':
      return {
        ...state,
        userID: null,
        email: null,
        fullname: null,
        isAuth: false,
        name: null,
        surname: null
      }
    default:
      return state;
  }
}

export default authReducer;