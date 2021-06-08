import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LenguageSelector from './LenguajeSelector'

export default function Home() {
    const [passwordShow, setPasswordShow] = useState("password")
    const [t, i18n] = useTranslation("global");
    let location = useLocation();
    const { username, email } = location.state.userData

    useEffect(() => {
        document.body.style = "background-image: var(--img-background-home);" +
            "background-size: 85rem;"
    })

    const passwordOrText = () => {
        switch (passwordShow) {
            case "text": return "password"
            case "password": return "text"
            default: return "text"
        }
    }
    return (
        <>
            <LenguageSelector
                i18n={i18n}
                t={t}
            />
            <div className="p-5">
                <form className="card rounded-lg bg-light col-auto m-5 p-3 ">
                    <div className="logout"><Link to="/user/login">{t("home.logout")}</Link></div>
                    <h1>{t("home.hello") + ' ' + username}</h1>
                    <div className="p-2" />
                    <h5>{t("home.apikey")}</h5>
                    <input type={passwordShow}
                        readOnly
                        defaultValue={localStorage.getItem('apiKey')}
                        className="form-control"
                    />
                    <div className="p-1" />
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={() => setPasswordShow(passwordOrText)} />
                        <label className="form-check-label" htmlFor="exampleCheck1">{t("home.showme")}</label>
                    </div>
                    <div className="p-2" />
                    <h5>{t("home.mail")}</h5>
                    <input className="form-control" type="text" defaultValue={email} readOnly></input>
                </form>
            </div>
        </>
    )





}