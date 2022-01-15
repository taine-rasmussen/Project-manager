import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCaXySVUrFGLk-TJEd1JFbvBvyBubGJ9-s",
  authDomain: "project-manager-312a2.firebaseapp.com",
  projectId: "project-manager-312a2",
  storageBucket: "project-manager-312a2.appspot.com",
  messagingSenderId: "1081882444933",
  appId: "1:1081882444933:web:fd7ecc06a8dd7b654a95ec",
  measurementId: "G-M6FREYMJX8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);