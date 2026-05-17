import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDb } from './firebase.js';

export const saveContactMessage = async ({ name, email, message }) => {
    const db = getDb();

    if (!db) {
        throw new Error(
            'Firebase is not configured. Add your VITE_FIREBASE_* variables (see .env.example).'
        );
    }

    await addDoc(collection(db, 'portfolio_messages'), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
        source: 'portfolio',
    });
};
