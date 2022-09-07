import {
  db, addDoc, collection, getDocs, query, where,
} from './firebaseImports.js';

/**
 * Función para guardar usuario
 * @param user
 * @returns {Promise<*>}
 */
export const save = async (user) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), user);
    return docRef.id;
  } catch (e) {
    return e;
  }
};

/**
 * Función obtener usuario por su email
 * @param email
 * @returns {Promise<*>}
 */
export const getUser = async (email) => {
  const userRef = collection(db, 'users');
  const qEmail = query(userRef, where('email', '==', email));
  return getDocs(qEmail);
};
