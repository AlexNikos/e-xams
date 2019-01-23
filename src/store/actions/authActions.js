import {authRef} from '../../Firebase';

// export const fetchUser = () => dispatch => {
//   authRef.onAuthStateChanged(user => {
//     if (user) {
//       dispatch({
//         type: FETCH_USER,
//         payload: user
//       });
//     } else {
//       dispatch({
//         type: FETCH_USER,
//         payload: null
//       });
//     }
//   });
// };

export const signIn = (email, password) => dispatch => {
  authRef
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
      let userID = authRef.currentUser.uid;
      console.log(userID);
      return dispatch( {type:'LOGIN_SUCCESS', userID })
    })
    .catch(error => {
      console.log(error);
      return dispatch( {type:'LOGIN_ERROR', error })
    });
};