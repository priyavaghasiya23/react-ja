import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Form() {
    const [state, setState] = useState({ name: "" });
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/data")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    function FormSubmit(e) {
        e.preventDefault();
        const newID = (data.length + 1).toString();
        axios
            .post("http://localhost:3000/data", { ...state, id: newID })
            .then((response) => {
                setData((prevData) => [...prevData, response.data]);
                setState({ name: "" });
            })
            .catch((error) => console.error("Error submitting data:", error));
    }

    function Deletedata(id) {
        axios
            .delete(`http://localhost:3000/data/${id}`)
            .then(() => {
                setData((prevData) => prevData.filter((item) => item.id !== id));
            })
            .catch((error) => console.error("Error deleting data:", error));
    }

    function Editdata(id) {
        const newValue = prompt("Enter the new value:");
        if (newValue) {
            axios
                .put(`http://localhost:3000/data/${id}`, { id, name: newValue })
                .then((response) => {
                    setData((prevData) =>
                        prevData.map((item) =>
                            item.id === id ? response.data : item
                        )
                    );
                })
                .catch((error) => console.error("Error editing data:", error));
        }
    }

    return (x1
        <div>
            <br />
           {/* Todo  */}
           <h1>To do App </h1>
            <form onSubmit={FormSubmit}>
                <input
                    type="text"
                    value={state.name}
                    placeholder="Enter the name"
                    onChange={(e) => setState({ name: e.target.value })}
                />  &nbsp;
                <button type="submit">Submit</button>
            </form><br /><br />

            <ul style={{ listStyle: "none" }}>
                {data.map((el) => (
                    <li key={el.id}>
                        {el.name}{" "}
                        <button type="button" onClick={() => Deletedata(el.id)}>
                            Delete
                        </button>&nbsp;&nbsp;
                        <button type="button" onClick={() => Editdata(el.id)}>
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}