import { databaseRef, authRef} from '../../Firebase';

export const setTest = () => {
  
  return (dispatch, getState) => {
    // const database = firebase.database();
    // const data = database.ref('type');

  //   let promise = new Promise((resolve, reject) => {
  //     data.on('value', function(snapshot) {
  //       console.log(snapshot.val());
  //       resolve(snapshot.val());
  //     });
  // });

  // testRef.on('value', function(snapshot) {
  //   console.log(snapshot.val());
  //   dispatch(setType(snapshot.val()) );
  // });

  // promise.then( (type) => {
  //   dispatch(setType(type) );
  // })

  }

}

export const setType = (userType) => {
  return{
    type: 'SET_TYPE', 
    userType: userType
  }

}

export const setInfo = (name, surname, email, password) => {

  return (dispatch, getState) => {
    
    const usersRef = databaseRef.child('Users');
    const id = authRef.currentUser.uid;
    console.log(id);

  }

  // return{
  //   type: 'SET_INFO',
  //   name,
  //   surname,
  //   email,
  //   password
  // }
}