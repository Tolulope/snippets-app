import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const firebaseConfig = {
  apiKey: "AIzaSyCxOmS9UMjPUwjr2Vj_-SXy6ScZt1C9XMA",
  authDomain: "snippets-47f15.firebaseapp.com",
  projectId: "snippets-47f15",
  storageBucket: "snippets-47f15.appspot.com",
  messagingSenderId: "653699261105",
  appId: "1:653699261105:web:cd3e94c5fe958011357890"
};

// initializeApp(firebaseConfig);
// app = firebase.initializeApp(firebaseConfig)

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
