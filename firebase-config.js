// firebase-config.js
var firebaseConfig = {
  apiKey: "AIzaSyDffVQzP6yaiUX4SsE3ghoBBBGyr7thMFs",
  authDomain: "edusolve-947c1.firebaseapp.com",
  projectId: "edusolve-947c1",
  storageBucket: "edusolve-947c1.firebasestorage.app",
  messagingSenderId: "1089784819674",
  appId: "1:1089784819674:web:5f0e310b0a8ae699191ae3"
};

// Inicialización global para Alonixz-Group
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Configuración cargada: App [DEFAULT] creada.");
}
