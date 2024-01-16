import React from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../components/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Auth() {
    const navigate = useNavigate();
    function signIn() {
        const provider = new GoogleAuthProvider();
        auth.useDeviceLanguage();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                setDoc(doc(db, "users", user.uid), user.providerData[0]);
                navigate("/");
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <Button variant="outlined" size="large" onClick={signIn}>
                Sign in with Google
            </Button>
        </Box>
    );
}
