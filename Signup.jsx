import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebase';

const Signup = () => {
    const auth = getAuth(app);

    function Login() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                console.log('error signing in:', error.message)
            });
    }
    return (
        <div>
            <h1>Sign up</h1>
            <button onClick={Login}>Login WithGoogle</button>
        </div>
    );
}

export default Signup;


// import React from 'react'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { app } from '../Firebase';

// export default function Glogin() {

//     const auth = getAuth(app)

//     const signin = () => {
//         const provider = new GoogleAuthProvider();
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 const credential = GoogleAuthProvider.credentialFromResult(result);
//                 const token = credential.accessToken;
//                 const user = result.user;
//                 console.log('user:', user, 'token', token)
//             }).catch((error) => {
//                 console.log('error signing in:', error.message)
//             });
//     };

//     return (
//         <div>
//             <h1>Sign in</h1>
//             <button onClick={signin}>Continue with Google</button>
//         </div>
//     )
// }