import { authRef, databaseRef } from '../../Firebase';


export const fetchUser = () => (dispatch, getState) => {

  let promise = new Promise((resolve, reject) => {

    authRef.onAuthStateChanged(user => {
      if (user) {
        console.log('fetchUser run, uid: ' + user.uid);
        dispatch({
          type: 'FETCH_USER',
          userID: user.uid
        });
        resolve(getState().auth.isAuth);
      } else {
        console.log('no user logged in fetchUser in actionAuth');
        dispatch({
          type: 'FETCH_NO_USER'
        });
        reject(getState().auth.isAuth);

      }
    });
  }
  );

  return promise;
};


export const fuser = (userID) => dispatch => {
  return dispatch({
    type: 'FETCH_USER',
    userID: userID
  });
}

export const fNouser = () => dispatch => {
  return dispatch({
    type: 'FETCH_NO_USER'
  })
}

export const signIn = (email, password) => dispatch => {

  let promise = new Promise((resolve, reject) => {
  authRef
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
      let userID = authRef.currentUser.uid;
      console.log(userID);
      dispatch({ type: 'LOGIN_SUCCESS', userID});
      resolve();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: 'LOGIN_ERROR', error });
      reject();
    });
  });

  return promise;
};

export const signOut = () => dispatch => {

  let promise = new Promise((resolve, reject) => {
    authRef.signOut().then(() => {

      console.log('signed out');
      dispatch({ type: 'SIGNOUT_SUCCESS' });
      resolve();

    }).catch((error) => {
      // An error happened.
      reject();
    });
  });
  return promise;
}

export const registerUser = (name, surname, email, password, type) => dispatch => {

  return new Promise((resolve, reject) => {

    authRef.createUserWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result);
      let userID = authRef.currentUser.uid;
      console.log('new user id is ' +userID);
      dispatch({ type: 'LOGIN_SUCCESS', userID});

      databaseRef.ref('Users').child(userID).set({
        id: userID,
        name, 
        surname, 
        fullname: name +' ' +surname, 
        email, 
        password, 
        type
      }).then(() => resolve('done'));

      
    
    })
    .catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      dispatch({type: 'FETCH_NO_USER'});
      reject('error');
      // ...
    });

  }
  );
}