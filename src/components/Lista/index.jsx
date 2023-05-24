import React from 'react'
import style from './Lista.module.css';

function Lista({ children, className }) {
  return (
    <ul className={`list-group ${style.titulo}`}>
        {children}
    </ul>
  )
}

export default Lista;