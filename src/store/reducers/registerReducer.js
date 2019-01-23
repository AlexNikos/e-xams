const initState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  type: 'Teacher',
  id: ''
};

const registerReducer = (state = initState, action) => {

  switch (action.type) {
    
    case 'SET_INFO':
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        email: action.email,
        password: action.password,
        id: action.id
      }
    default:
      return state
  }
}

export default registerReducer;