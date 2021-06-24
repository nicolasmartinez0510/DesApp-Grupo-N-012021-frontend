import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import MetricsTable from './MetricsTable';

export default function Metrics({ showModal, closeModal }) {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Modal show={showModal}
                keyboard={false}
                onHide={closeModal}
                backdrop="static"
                centered
                size="lg"
            >
                <Modal.Header closeButton={false}>
                    <Modal.Title>{t("metrics.title")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MetricsTable />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        {t("notifier.close")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
