import React, { useState, useEffect } from 'react';
import Puertos from './Puertos';
import  dataB  from '../api/db.json';

const Main = () => {
  const [ db, setDb ] = useState([])

  useEffect(()=>{
    setDb(dataB)
  },[])

  const handleCheck = (e) => {   
    let isChecked = e.currentTarget;
    let parentElement = isChecked.parentElement;
    let $spanImg = parentElement.querySelector("span");    
    let idSelect = `${db[e.currentTarget.dataset.id].name_port}${e.currentTarget.dataset.id}`
    let $article = document.getElementById(idSelect);
    if(isChecked.checked === true){
      $spanImg.classList.remove("imgFlechaAbajo");
      $spanImg.classList.add("imgFlechaArriba");
      $article.classList.add("mostrar");
      
    }else{
      $spanImg.classList.remove("imgFlechaArriba");
      $spanImg.classList.add("imgFlechaAbajo");
      $article.classList.remove("mostrar");
      
    }
    
  }
  
  return (
    <>
      <header>
        <div className='header-div header-izquierdo' ><div className='logo'></div><h1 className="tituloHeader">PORT INFORMATION</h1></div>
        <div className='header-div header-derecho'>Home</div>        
      </header>

      <section className='section-main'>
        <div className="tituloSection" ><h2>Port List:</h2></div>
        <article className="container">
          <ul className="listaPuertos">
            {
              db.map(e => <Puertos key={e.id} db={e} handleCheck={handleCheck} />) 
            }
          </ul>
        </article>
      </section>
      
      <footer>
        <p>Desarrollado por Hernán Luis Veyret - 2024</p>
      </footer>
    </>
  )
}
export default Main;