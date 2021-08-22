import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  'prompt':'select_account'
});

export { firebase, googleAuthProvider, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
    
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //     console.log(expenses);
// // });

// // database.ref('expenses').push({
// //     description: 'council tax',
// //     note: 'monthly payment',
// //     amount:10550,
// //     createdAt: 450067
// // });

// // database.ref('notes/-MeVr1jIvthU46o9HIAv').remove();

// // database.ref('notes').push({
// //     title: 'Course topics',
// //     body: 'to do'   
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('error with data fetching. ', e);
// // });

// // const onDataChange = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data ', e)
// //     });

// // database.ref().set({
// //     name: 'Ashley Yetman',
// //     age: 31,
// //     stressLevel: 6,
// //     job: {
// //         title:'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Cheltenham',
// //         country: 'United kingdom'
// //     }
// // }).then(() => {
// //     console.log('Data is saved.');
// // }).catch((e) => {
// //     console.log('This failed.', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref()
// // .remove()
// // .then(() => {
// //     console.log('Data was removed');
// // })
// // .catch((e) => {
// //     console.log('Data was not removed! ', e)
// // });