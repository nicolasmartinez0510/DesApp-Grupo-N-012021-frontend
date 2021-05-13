import React from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css'

export default function LenguageSelector({i18n, t}) {

    const changeLanguage = leng => {
        i18n.changeLanguage(leng)
    }


    return (
        <div className="lenguaje_selector">
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                   {t("idiom")}
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick= {() => changeLanguage("es")}>{t("spanish")}</Dropdown.Item>
                    <Dropdown.Item onClick= {() => changeLanguage("en")}>{t("english")}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )

}