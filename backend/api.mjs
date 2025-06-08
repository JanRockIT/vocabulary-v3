// ===== Firebase SDK-Imports =====
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// ===== Dein bestehendes Konfig-Objekt =====
const firebaseConfig = {
  apiKey: "AIzaSyBVEDU_xNDOT9vp3gDEgcx0C_sqY3S-toI",
  authDomain: "lern-vocabulary.firebaseapp.com",
  databaseURL: "https://lern-vocabulary-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lern-vocabulary",
  storageBucket: "lern-vocabulary.firebasestorage.app",
  messagingSenderId: "292387419836",
  appId: "1:292387419836:web:1e50e52b3f6d6d702902b9"
};

// ===== Initialisierung =====
const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);

/**
 * Fügt ein neues Vokabel-Objekt unter /vocabulary/ an.
 * push() erzeugt dabei automatisch einen eindeutigen Key.
 */
export function addVocabulary(word, translation) {
  const listRef     = ref(db, "vocabulary");   // Ordner/Liste
  const newItemRef  = push(listRef);           // Auto-ID

  return set(newItemRef, {
    word,
    translation,
    createdAt: Date.now()
  });
}

// ----- Beispielaufruf -----
addVocabulary("apple", "der Apfel")
  .then(() => console.log("✓ erfolgreich gespeichert"))
  .catch(err => console.error("Fehler:", err));
