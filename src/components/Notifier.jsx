import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import * as Api from "./ApiRest";
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup'


export default function NotifierModal({ showModal, closeModal }) {
    const [t, i18n] = useTranslation("global");
    const [error, setError] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleClose = () => {
        setConfirmation('')
        setError('')
        closeModal()
        formik.values.titleId = ''
        formik.values.url = ''
        formik.errors.titleId = ''
        formik.errors.url = ''
    }

    const formik = useFormik({
        initialValues: {
            titleId: '',
            url: '',
        },

        validationSchema: Yup.object({
            titleId: Yup.string()
                .required(t("validations.notifier.titleId.required")),
            url: Yup.string()
                .required(t("validations.notifier.url.required"))
                .matches(/^(http(s?):)([/|.|\w|\s|-])*\./, t("validations.notifier.url.matches")),
        }),

        onSubmit: values => {
            Api.subscribe(values.titleId, values.url)
                .then(response => {
                    if (response.status === 200) {
                        setConfirmation(t("notifier.good"))
                        setTimeout(() => { setConfirmation('') }, 3000)
                    }
                })
                .catch(() => {
                    setError(t("notifier.bad"))
                    setTimeout(() => { setError('') }, 3000)

                })
        },
    });

    return (
        <>
            <Modal show={showModal}
                keyboard={false}
                onHide={closeModal}
                backdrop="static"
                centered
            >
                <Modal.Header closeButton={false}>
                    <Modal.Title>{t("notifier.title")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label className='font-weight-bolder'>{t("notifier.content")}</label>
                            <input
                                id="titleId"
                                name="titleId"
                                className="form-control"
                                type="text"
                                placeholder={t("notifier.phcontent")}
                                onChange={formik.handleChange}
                                value={formik.values.titleId}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.titleId && formik.touched.titleId && (
                                <div className="input-feedback text-danger">{formik.errors.titleId}</div>
                            )}
                            <label className='font-weight-bolder'>{t("notifier.link")}</label>
                            <input
                                id="url"
                                name="url"
                                className="form-control"
                                type="text"
                                placeholder={t("notifier.phlink")}
                                onChange={formik.handleChange}
                                value={formik.values.url}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.url && formik.touched.url && (
                                <div className="input-feedback text-danger">{formik.errors.url}</div>
                            )}
                        </div>
                    </form>
                    <div className="p-2" />
                    {error && <div className="font-weight-bolder alert alert-danger">{error}</div>}
                    {confirmation && <div className="font-weight-bolder alert alert-success">{confirmation}</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t("notifier.close")}
                    </Button>
                    <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
                        {t("notifier.save")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
