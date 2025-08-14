import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAYjk-ELXYy8aai3qinIhAL1mRa1P4UNoE',
  authDomain: 'miniblog-6c548.firebaseapp.com',
  projectId: 'miniblog-6c548',
  storageBucket: 'miniblog-6c548.firebasestorage.app',
  messagingSenderId: '1057248189620',
  appId: '1:1057248189620:web:2c20b9ae44f2453aeccbe1',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, app }
