import React, { useState } from 'react';
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { app } from '../Firebase';

const database = getDatabase(app);

const FirebaseData1 = () => {
    const [post, setPost] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    // Function to send data to Firebase
    function sendData() {
        set(ref(database, 'users/username'), {
            username: "krishna",
            email: "test@gmail.com"
        }).then(() => {
            console.log("Data sent successfully!");
        }).catch((err) => {
            console.log("Error sending data: ", err);
        });
    }

    // Function to get data from Firebase
    function getdata() {
        const starCountRef = ref(database, 'users/username');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setPost(data || {}); // Ensure post is never null
        });
    }

    // Function to delete data
    function deletetodo() {
        const starCountRef = ref(database, 'users/username');
        remove(starCountRef)
            .then(() => {
                console.log("Data deleted successfully!");
                setPost({}); // Clear local state
            })
            .catch((err) => {
                console.log("Error deleting data: ", err);
            });
    }

    // Function to handle edit operation
    function handleEdit() {
        setIsEditing(true);
        setNewUsername(post.username);
        setNewEmail(post.email);
    }

    // Function to update data in Firebase
    function updateData() {
        set(ref(database, 'users/username'), {
            username: newUsername,
            email: newEmail
        }).then(() => {
            console.log("Data updated successfully!");
            setIsEditing(false); // Close edit mode
        }).catch((err) => {
            console.log("Error updating data: ", err);
        });
    }

    // Function to cancel editing
    function cancelEdit() {
        setIsEditing(false);
    }

    return (
        <div>
            <button onClick={sendData}>Send Data</button>
            <button onClick={getdata}>Get Data</button>

            {post.username && !isEditing && (
                <div>
                    <h1>{post.username}</h1>
                    <h1>{post.email}</h1>

                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={deletetodo}>Delete</button>
                </div>
            )}

            {isEditing && (
                <div>
                    <input
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder="Edit username"
                    />
                    <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="Edit email"
                    />
                    <button onClick={updateData}>Update</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default FirebaseData1;