import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import * as Api from "./ApiRest";
import { useTranslation } from 'react-i18next';

export default function NotifierModal({ showModal, closeModal }) {
    const [t, i18n] = useTranslation("global");
    const [titleId, setTitleId] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleClose = () => {
        setConfirmation('')
        setError('')
        closeModal()
    }

    const handleSubscribe = (ev) => {
        ev.preventDefault();
        Api.subscribe(titleId, url)
            .then(response => {
                if (response.status === 200) {
                    setConfirmation(t("notifier.good"))
                    setTimeout(() => { setConfirmation('') }, 2500)
                }
            })
            .catch(() => {
                setError(t("notifier.bad"))
                setTimeout(() => { setError('') }, 2500)

            })
    }

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
                                className="form-control"
                                type="text"
                                placeholder={t("notifier.phcontent")}
                                onChange={(ev) => setTitleId(ev.target.value)}
                            />
                            <label className='font-weight-bolder'>{t("notifier.link")}</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={t("notifier.phlink")}
                                onChange={(ev) => setUrl(ev.target.value)}
                            />
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
                    <Button variant="primary" type="submit" onClick={handleSubscribe}>
                        {t("notifier.save")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
