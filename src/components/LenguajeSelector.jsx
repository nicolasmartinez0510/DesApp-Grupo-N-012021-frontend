import React from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css'

export default function LenguageSelector({idiomSelected,changeToSpanish,changeToEnglish}) {
   

    return (
        <div className="lenguaje_selector">
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                   {idiomSelected}
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick= {changeToSpanish} >Spanish</Dropdown.Item>
                    <Dropdown.Item onClick= {changeToEnglish}>English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )

}