import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const signUp = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        sendEmailVerification(userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error(error);
    }
    }

    export const signIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error(error);
    }
    }

    export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
    }
