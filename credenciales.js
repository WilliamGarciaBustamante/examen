// credenciales.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAuOqXa5T2SWzmycxvwzPxG81zZMQHILc",
  authDomain: "mylogin-28e61.firebaseapp.com",
  projectId: "mylogin-28e61",
  storageBucket: "mylogin-28e61.appspot.com",
  messagingSenderId: "80134954809",
  appId: "1:80134954809:web:61c5be08dd59da8d7592e8",
  measurementId: "G-5C9M3YVQTN"
};

// Inicializa la app
const appFirebase = initializeApp(firebaseConfig);

// Exporta la instancia de autenticación
export const auth = getAuth(appFirebase);
