
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArvNLKThEOMxw6m8NAJu7bTY2Vqs8_QwQ",
  authDomain: "ecommerce-website-221f5.firebaseapp.com",
  projectId: "ecommerce-website-221f5",
  storageBucket: "ecommerce-website-221f5.appspot.com",
  messagingSenderId: "323908261736",
  appId: "1:323908261736:web:2fa40d5696fac9bd53e8dd",
  measurementId: "G-TLBW5Y1NT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;