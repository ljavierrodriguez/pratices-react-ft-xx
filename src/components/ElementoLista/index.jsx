import React from 'react'

const ElementoLista = ({ texto, className }) => {
  return (
    <li className={className}>{texto}</li>
  )
}

export default ElementoLista