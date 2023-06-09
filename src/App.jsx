import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Lista from './components/Lista'
import ElementoLista from './components/ElementoLista'
import Header from './components/Header';

import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

function App(props) { // { name, lastname, phone, single }
    const [students] = useState(["Larry", "Moe", "Curly"]);
    const [languages] = useState(["HTML5", "CSS3", "JS"]);

    /* const values = students.map((item, index) => {
        return (
            <li className='list-group-item' key={index}>{item}</li>
        )
    }) */

    return (
        <>
        <Header />
        <div className='container'>
            <h1>
                {props.name} {props.lastname}
            </h1>
            <hr />
            <ul className="list-group">
                <li className="list-group-item">
                    HTML5 <FaHtml5 /> <MdEdit />
                </li>
                <li className="list-group-item">
                    CSS3 <FaCss3 />
                </li>
                <li className="list-group-item">
                    JS <FaJs />
                </li>
            </ul>
            <hr />
            <Lista>
                {/* <ElementoLista texto="HTML5" className="list-group-item" />
                <ElementoLista texto="CSS" className="list-group-item" />
                <ElementoLista texto="JS" className="list-group-item" /> */}
                {
                    languages.map((item, index) => {
                        return (
                            <ElementoLista key={index} texto={item} className={"list-group-item"} />
                        )
                    })
                }
            </Lista>
            <hr />
            <ul className="list-group titulo">
                {/* {values} */}
                {students.map((item, index) => {
                    return (
                        <li className='list-group-item' key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

App.defaultProps = {
    name: 'John',
    lastname: 'Doe',
    phone: 123456,
    single: false
}

App.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    phone: PropTypes.number,
    single: PropTypes.bool
}

export default App

