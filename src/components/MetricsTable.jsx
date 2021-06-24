import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import * as Api from "./ApiRest";
import { useTranslation } from 'react-i18next';

export default function MetricsTable() {
    const [t, i18n] = useTranslation("global");
    const [metrics, setMetrics] = useState({})

    useEffect(() => {
        Api.me()
            .then(response => {
                setMetrics(response.data)
            })
    }, []);

    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>{t("metrics.title")}</th>
                    <th>{t("metrics.value")}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{t("metrics.addReview")}</td>
                    <td>{metrics.addReview}</td>
                </tr>
                <tr>
                    <td>{t("metrics.report")}</td>
                    <td>{metrics.report}</td>
                </tr>
                <tr>
                    <td>{t("metrics.rate")}</td>
                    <td >{metrics.rate}</td>
                </tr>
                <tr>
                    <td>{t("metrics.search")}</td>
                    <td >{metrics.search}</td>
                </tr>
                <tr>
                    <td>{t("metrics.contentSearch")}</td>
                    <td >{metrics.contentSearch}</td>
                </tr>
            </tbody>
        </Table>
    );



}