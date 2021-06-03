import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

export default function Home() {
    const [passwordShow, setPasswordShow] = useState("password")

    useEffect(() => {
        document.body.style = "background-image: var(--img-background-home);" +
            "background-size: 85rem;"
    })

    const passwordOrText = () => {
        switch(passwordShow) {
            case "text": return "password"
            case "password": return "text"
        }
    }


    return (
        <div className="p-5">
            <form className="card rounded-lg bg-light col-auto m-5 p-3 ">
                <label>Api key</label>
                <input type={passwordShow}
                    readOnly
                    defaultValue={localStorage.getItem('apiKey')}
                    className="form-control"
                />
                <div className="p-2" />
                <div className="form-check">
                    <input 
                    type="checkbox"
                    className="form-check-input" 
                    onChange={() => setPasswordShow(passwordOrText)}/>
                    <label className="form-check-label" for="exampleCheck1">Show me</label>
                </div>
            </form>
        </div>
    )





}