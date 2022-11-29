import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebaseConfig';
const auth = getAuth(app);

const signinViaEmail = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      resolve(userCredential);
    } catch (err) {
      reject(err);
    }
  });
};

export default signinViaEmail;
