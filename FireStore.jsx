import React from 'react';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const FireStore = () => {
    async function addData() {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    return (
        <div>
            <h1>Fire Base Fire Store</h1>
            <button onClick={addData}>set Data</button>
        </div>
    );
}

export default FireStore;

