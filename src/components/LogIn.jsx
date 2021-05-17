import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Api from "./ApiRest";
import { useTranslation } from 'react-i18next';
import LenguageSelector from "./LenguajeSelector";


export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const [t,i18n] = useTranslation("global")

    useEffect(() => {
        document.body.style = "background-image: var(--img-background-home);" +
            "background-size: 85rem;"
    })

  
    const handleSubmit = (ev) => {
        ev.preventDefault();
        Api.login(username, password)
            .then(response => {
                if (response.status === 200) {
                  console.log(response.data)
                }
            })
            .catch(() => setError("Invalid username or password. Please, try again"))
    }

    return (
        <div>
            <LenguageSelector
               i18n={i18n}
                t={t}
            />
            <form className="card rounded-lg bg-light col-auto m-5 p-3 " onSubmit={handleSubmit}>
                <div className='bg-dark rounded-lg mb-3'>
                </div>
                <h1 className='text-center font-italic font-weight-bold'>{t("login.hello")}</h1>
                <div>
                    <label htmlFor="username" className='font-weight-bolder'>{t("login.username")}</label>
                    <input type="text"
                        value={username}
                        className="form-control"
                        autoComplete="current-username"
                        placeholder={t("login.username")}
                        onChange={(ev) => {
                            setUsername(ev.target.value);
                            setError('')
                        }} />
                </div>
                <div>
                    <label htmlFor="password" className='font-weight-bolder mt-4'>{t("login.password")}</label>
                    <input type="password"
                        value={password}
                        className="form-control mb-4"
                        placeholder={t("login.password")}
                        autoComplete="current-password"
                        onChange={(ev) => {
                            setPassword(ev.target.value);
                            setError('')
                        }} />
                </div>
                <Link to='/'> {t("login.unregister")}</Link>
                {error && <small className="font-weight-bolder alert alert-danger">{error}</small>}
                <div className="text-center">
                    <button className="btn btn-info m-3" onSubmit={handleSubmit}> {t("login.enter")} </button>
                </div>
            </form>
        </div>
    );
}









