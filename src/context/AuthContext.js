// import React, { useEffect, useRef, useState } from "react";
// import {
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase/firebase";
// import { useLocation, useNavigate } from "react-router";
// import Loader from "../Helpers/Loader";

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const timeout = useRef();
//   console.log("AuthProvider", { isLoading });

//   function signUp(email, password) {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         if (errorCode === "auth/weak-password") {
//           setErrorMessage({ password: errorMessage });
//         } else {
//           setErrorMessage({ email: errorMessage });
//         }
//       });
//   }
//   function login({ email, password }) {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         setErrorMessage("Invalid Email/Password");
//       });
//   }
//   function googleSignIn() {
//     signInWithPopup(auth, new GoogleAuthProvider())
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         // const credential = GoogleAuthProvider.credentialFromResult(result);
//         // const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//         console.log({ errorCode, errorMessage, email, credential });
//       });
//   }

//   function signOutUser() {
//     signOut(auth)
//       .then(() => {
//         console.log("Sign Out Sucessfull");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   useEffect(() => {
//     const subscription = onAuthStateChanged(auth, (user) => {
//       if (user != null) {
//         setIsAuthenticated(true);
//         setUser(user);
//       } else {
//         setIsAuthenticated(false);
//         console.log("😢 We are not authenticated!");
//       }
//       setIsLoading(false);
//     });
//     return () => {
//       subscription();
//       clearTimeout(timeout.current);
//     };
//   }, []);

//   const setErrorMessage = (err) => {
//     setError(err);
//     if (timeout.current) {
//       console.log(timeout.current);
//       clearTimeout(timeout.current);
//     }
//     timeout.current = setTimeout(() => {
//       setError(null);
//     }, 3000);
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated,
//         googleSignIn,
//         signOutUser,
//         signUp,
//         login,
//         error,
//       }}
//     >
//       {!isLoading ? children : <Loader />}
//     </AuthContext.Provider>
//   );
// };

import React, { useState } from "react";

import Loader from "../Helpers/Loader";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user: {
          name: "sumanth",
        },
        isAuthenticated: false,
      }}
    >
      {!isLoading ? children : <Loader />}
    </AuthContext.Provider>
  );
};
