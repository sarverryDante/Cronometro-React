import React, { useState, useEffect } from 'react';
import './W3Styles.css'
import ListaParcial from './ListaParcial';

function Cronometro() {
  const [tiempo, setTiempo] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [listaTiempos, setListaTiempos] = useState([]);

  useEffect(() => {
    if (!corriendo) return;

    //intervalo de 100 milisegundos para incrementar el tiempo
    const temporizador = setInterval(() => setTiempo(prev => prev + 1), 100);

    return () => clearInterval(temporizador); // Limpia el intervalo al detener
  }, [corriendo]);

  // formatea el tiempo en Minutos, segundos y milisegundos
  const formatearTiempo = () => {
    const min = String(Math.floor(tiempo / 600)).padStart(2, '0');
    const seg = String(Math.floor((tiempo % 600) / 10)).padStart(2, '0');
    const dec = tiempo % 10;
    return `${min}:${seg}.${dec}`;
  };

  return (
    <>
      <div className='w3-container w3-center'>
        <h1>{formatearTiempo()}</h1>
        <button className='w3-button w3-circle w3-black' onClick={() => (setCorriendo(prev => !prev))}>{corriendo ? 'Detener' : 'Iniciar'}</button>
        {/*en linea 29: el prev toma el valor de corriendo y con '!' niega el estado, cambiandolo de true a false o viseversa.
        Tambien use un operador ternario ('?') para cambiar el texto dentro del button*/}
        <button className='w3-button w3-circle w3-yellow' onClick={() => (setCorriendo(false), setTiempo(0))}>Reiniciar</button>
        {/*en linea 32: pone el corriendo en false detiendo el temporizador y el tiempo en 0*/}
        <button className='w3-button w3-circle w3-black' onClick={() => (setListaTiempos([...listaTiempos, formatearTiempo()]))}>Parcial</button>
        {/*en linea 34: toma el tiempo actual de 'formatearTiempo' y lo agrega al '<ul>' dentro del componente 'ListaParcial'*/}
        <h3>TIEMPOS</h3>
        <ListaParcial tiempos={listaTiempos} /> {/*mostramos el componente 'Lista Parcial'*/}
      </div>
    </>
  );
}

export default Cronometro;


// Sarverry Agustin - Soria Ramiro - Nazar Luciano - Gerez Claudio 


