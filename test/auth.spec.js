import {
  signInWithEmailAndPassword,
  auth,
  createUserWithEmailAndPassword,
}
  from '../src/firebase/firebaseImports.js';
import { logInPath, register } from '../src/js/auth.js';

jest.mock('../src/firebase/firebaseImports.js', () => ({
  auth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  getAuth: jest.fn(),
  getDocs: jest.fn(),
  initializeApp: jest.fn(),
  signInWithPopup: jest.fn(),
  addDoc: jest.fn(),
  collection: jest.fn(),
  db: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  onAuthStateChanged: jest.fn(),
}));

describe('Testing function firebase', () => {
  const email = 'faker@gmail.com';
  const password = '123456';

  it('debería llamar el registro', async () => {
    await register(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('debería llamar el registro con argumentos', async () => {
    await register(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });
});

describe('Test user Login', () => {
  const email = 'faker@gmail.com';
  const password = '123456';
  it('debería llamar Login', async () => {
    await logInPath(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('debería llamar Login with arguments', async () => {
    await logInPath(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });
});
