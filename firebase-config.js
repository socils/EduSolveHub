// 1. Usamos la URL completa para que el navegador pueda descargar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Tus credenciales reales de EduSolve
const firebaseConfig = {
  apiKey: "AIzaSyDffVQzP6yaiUX4SsE3ghoBBBGyr7thMFs",
  authDomain: "edusolve-947c1.firebaseapp.com",
  projectId: "edusolve-947c1",
  storageBucket: "edusolve-947c1.firebasestorage.app",
  messagingSenderId: "1089784819674",
  appId: "1:1089784819674:web:5f0e310b0a8ae699191ae3"
};

// 2. Inicializamos la conexión
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);   

// 3. Exportamos las funciones para usarlas en login.html e index.html
export { onAuthStateChanged, signOut };         