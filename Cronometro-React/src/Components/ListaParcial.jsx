import React from 'react';
import './W3Styles.css'

function ListaParcial({ tiempos }) {
  return (
    <ul className='w3-ul w3-grey w3-card-4'>
      {tiempos.map((tiempo, indice) => (
        <li key={indice}>{tiempo}</li>
      ))}
    </ul>
  );
}

export default ListaParcial;


// Sarverry Agustin - Soria Ramiro - Nazar Luciano - Gerez Claudio //