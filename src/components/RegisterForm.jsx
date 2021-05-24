import React, { useEffect } from "react";
import { Formik, FormikProvider } from "formik";
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LenguageSelector from "./LenguajeSelector";
import * as Api from './ApiRest'


export default function RegisterForm() {
    const history = useHistory();
    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        document.body.style = "background-image: var(--img-background-home);" +
            "background-size: 85rem;"
    })

    
    return (
        <div>
            <LenguageSelector
                i18n={i18n}
                t={t}
            />
            <Formik
                initialValues={{ email: '', username: '', platform: '', password: '', passwordConfirmation: '' }}
                onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            const {username, platform ,email, password} = values
                            Api.register(username, platform ,email, password)
                                .then(response => {
                                        if (response.status>=200 && response.status<300) {
                                            history.push('/login')
                                        }
                                    }
                                )
                                .catch(() => "Boom")
                            setSubmitting(false);
                        }, 500);
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email(t("validations.email.valid"))
                        .required(t("validations.email.required")),
                    username: Yup.string()
                        .required(t("validations.username.required"))
                        .min(6, t("validations.username.min"))
                        .matches(/^[a-z][a-z0-9]*(?:_[A-Za-z0-9]+)*$/, t("validations.username.matches")),
                    platform: Yup.string()
                        .required(t("validations.platform.required")),
                    password: Yup.string()
                        .required(t("validations.password.required"))
                        .min(8, t("validations.password.min"))
                        .max(256, t("validations.password.max"))
                        .matches(/(?=.*[0-9])/, t("validations.password.matches")),
                    passwordConfirmation: Yup.string()
                        .required(t("validations.passwordConfirm.required"))
                        .oneOf([Yup.ref('password'), null], t("validations.passwordConfirm.matches"))
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return (
                        <form className="formulario card m-5 p-3 bg-light " onSubmit={handleSubmit}>
                            <div className='bg-dark rounded-lg mb-3'>
                            </div>
                            <h1 className='text-center font-italic font-weight-bold'>{t("register.hello")}</h1>
                            <div className="form-group pt-2">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder={t("register.email")}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='form-control'
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback text-danger">{errors.email}</div>
                                )}
                            </div>

                            <div className="form-group pt-2">
                                <select
                                    className='form-control'
                                    name="platform"
                                    type="text"
                                    value={values.platform}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ display: 'block' }}
                                    label={t("register.platform")}
                                >   
                                    <option value="" label={t("register.platform")} />
                                    <option value="NETFLIX" label="Netflix" />
                                    <option value="AMAZON" label="Amazon" />
                                    <option value="DISNEY" label="Disney" />
                                    <option value="PLEX" label="Plex" />

                                </select>
                                {errors.password && touched.password && (
                                    <div className="input-feedback text-danger">{errors.platform}</div>
                                )}
                            </div>

                            <div className="form-group pt-2">
                                <input
                                    name="username"
                                    type="text"
                                    placeholder={t("register.username")}
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='form-control'
                                />
                                {errors.username && touched.username && (
                                    <div className="input-feedback text-danger">{errors.username}</div>
                                )}
                            </div>
                            <div className="form-group pt-2">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder={t("register.password")}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='form-control'
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback text-danger">{errors.password}</div>
                                )}
                            </div>
                            <div className="form-group pt-2">
                                <input
                                    name="passwordConfirmation"
                                    type="password"
                                    placeholder={t("register.passwordConfirm")}
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='form-control'
                                />
                                {errors.passwordConfirmation && touched.passwordConfirmation && (
                                    <div className="input-feedback text-danger">{errors.passwordConfirmation}</div>
                                )}
                            </div>
                            <div className="pt-10" />
                            <Link to='/login'> {t("register.register")}</Link>
                            <button type="submit" className="btn btn-info m-4" disabled={isSubmitting}>
                                {t("register.enter")}
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>

    );
}
