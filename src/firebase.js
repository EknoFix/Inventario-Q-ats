import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAa2Xw7pH3E8KQxzXt_Icp1MhdxHDIXVTI",
  authDomain: "inventario-q-ats.firebaseapp.com",
  projectId: "inventario-q-ats",
  storageBucket: "inventario-q-ats.appspot.com",
  messagingSenderId: "183581413329",
  appId: "1:183581413329:web:58944ff4afbcfd004c5af0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;