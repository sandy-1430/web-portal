import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router'


export default function register() {
    const router = useRouter()
    const [name, setName] = useState('');
    const [dob, setDob] = useState();
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let userDetails = {
            name: name,
            dob: dob,
            phone: phone
        };
        let userLists = JSON.parse(sessionStorage.getItem("userLists"));
        if (userLists) {
            let filterArray = userLists.filter((list) => list.phone === phone);
            if (filterArray.length) {
                alert("This User is Already Exists")
            } else {
                userLists.push(userDetails);
                sessionStorage.setItem("userLists", JSON.stringify(userLists));
                alert("Registered Sucessfully");
            }
        } else {
            console.log(userDetails);
            sessionStorage.setItem("userLists", JSON.stringify([userDetails]));
            alert("Registered Sucessfully");
        }
        router.push("/modal");
    }

    return (
        <div className={styles.pageCenter}>
            <div className={styles.register}>
                <h2>Register</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.formGroup}>
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value.replace(/[^A-Za-z]/, ""))}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Date Of Birth</label>
                        <DatePicker
                            selected={dob}
                            onChange={(date) => setDob(date)}
                            dateFormat="dd/MM/yyyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/, ""))}
                            maxLength={10}
                            minLength={10}
                            required
                        />
                    </div>
                    <button
                        className={styles.primary}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
