import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebase';


const Login = () => {
    const auth = getAuth(app);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = () => { 
        const provider = new GoogleAuthProvider(); // Declare the provider
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                console.log('User:', user, 'Token:', token);
                alert('Sign-in successful!');
            })
            .catch((error) => {
                console.error('Error signing in:', error.message);
                alert(`Error: ${error.message}`);
            });
    };

    return (
        <div>
            <h1>Sign in</h1>
            {/* Optional email and password fields */}
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />
            <button onClick={signin}>Continue with Google</button>
        </div>
    );
};

export default Login;
