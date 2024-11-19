import admin from "firebase-admin";
import path from "path";

// Initialize Firebase Admin SDK
const serviceAccountPath = path.resolve(
    __dirname,
    "../firebase-admin-sdk.json"
);

// Check if the Firebase app is already initialized to prevent re-initialization issues
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath),
    });
}

export const auth = admin.auth();
export const db = admin.firestore();