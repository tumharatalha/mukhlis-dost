import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../../../firebaseConfig';

const auth = getAuth(app);
const db = getFirestore(app);

const signupViaEmail = (email, password, fullName, phone) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });
      await addDoc(collection(db, 'phone-numbers'), {
        phoneNumber: phone,
        userId: userCredential.user.uid,
      });
      resolve(userCredential);
    } catch (err) {
      reject(err);
    }
  });
};

export default signupViaEmail;
