import React from 'react';
import './puertos.css'

function MostrarInfo({e,indice}){ 
  let item = `item${indice+1}`     
  return (
      <li className="li_item">{e[item]}</li>    
  )
}
function MostrarImagen({e,indice}){
  let item = `item${indice+1}`
  console.log(item)
  return (    
      <figure>
        <img src={e[item]} alt="Imagen del puerto" />
      </figure>    
  )
}

const Puertos = ({db, handleCheck}) => {  
  return (
    <div>
        <li key={db.id}>
          <div className="tituloPuerto"><p>{db.name_port}</p><label><span className="imgFlechaAbajo" >.</span><input type="checkbox" name="check-puerto" data-id={db.id} className="check-puertos" onChange={handleCheck}/></label></div>
          <article className="article-puertos" id={`${db.name_port}${db.id}`}> 
            {/*owner*/}
            {db.owners ? <p className="p_item"><b className='b_item'>Owners: </b>{db.owners}</p> : <p className="p_item"><b className='b_item'>Owners: </b>NIL</p> }
            {/*location*/}
            {db.location ? <p className="p_item"><b className='b_item'>Location: </b>{db.location}</p> : <p className="p_item"><b className='b_item'>Location: </b>NIL</p>}
           {/*storage capacity*/}
            {db.storage_capacity && 
                <ul className="ul_item">
                  <b className='b_item'>Storage Capacity: </b>
                  {db.storage_capacity.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               }
            {/*cargoes loaded*/}
            {db.cargoes_loaded ? <p className="p_item"><b className='b_item'>Cargoes Loaded: </b>{db.cargoes_loaded}</p>: <p className="p_item"><b className='b_item'>Cargoes Loaded: </b>NIL</p>}

           {/*cargoes disharged*/}
            {db.cargoes_discharged ? <p className="p_item"><b className='b_item'>Cargoes Discharged: </b>{db.cargoes_discharged}</p> : <p className="p_item"><b className='b_item'>Cargoes Discharged: </b>NIL</p>}

           {/*loading rates*/}
            {db.loading_rates.length > 0 ? (
                <ul className="ul_item">
                  <b className='b_item'>Loading Rates: </b>
                  {db.loading_rates.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
              ) : <p className="p_item"><b className='b_item'>Loading Rates: </b>NIL</p> }
              {/*dischargin rates*/}
              {db.discharging_rates.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Discharging Rates: </b>
                  {db.discharging_rates.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Discharging Rates: </b>NIL</p>}

               {/*depth_alongside */}
               {db.depth_alongside ? <p className="p_item"><b className='b_item'>Depth Alongside: </b>{db.depth_alongside}</p> : <p className="p_item"><b className='b_item'>Depth Alongside: </b>NIL</p> }
                {/*air_draft*/}
               {db.air_draft ? <p className="p_item"><b className='b_item'>Air Draft: </b>{db.air_draft}</p> : <p className="p_item"><b className='b_item'>Air Draft: </b>NIL</p> }
                {/*draft_restriction*/}
               {db.draft_restriction.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Draft Restriction: </b>
                  {db.draft_restriction.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Draft Restriction: </b>NIL</p>}
               {/*loading_arms*/}
               {db.loading_arms.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Loading Arms: </b>
                  {db.loading_arms.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Loading Arms: </b>NIL</p>}

               {/*discharging Arms */}               
               {db.discharging_arms.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Discharging Arms: </b>
                  {db.discharging_arms.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Discharging Arms: </b>NIL</p>}

               {/*dolphins_and_frontage*/}
               {db.dolphins_and_frontage ? <p className="p_item"><b className='b_item'>Dolphins And Frontage: </b>{db.dolphins_and_frontage}</p> : <p className="p_item"><b className='b_item'>Dolphins And Frontage: </b>NIL</p> }

               {/*working_time*/}
               {db.working_time.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Working Time: </b>
                  {db.working_time.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Working Time: </b>NIL</p>}

               {/*port_expenses*/}
               {db.port_expenses.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Port Expenses: </b>
                  {db.port_expenses.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Port Expenses: </b>NIL</p>}

               {/*servicies*/}
               {db.servicies.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Servicies: </b>
                  {db.servicies.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Servicies: </b>NIL</p>}

               {/*observations*/}
               {db.observations.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Observations: </b>
                  {db.observations.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Observations: </b>NIL</p>}

               {/*address*/}
               {db.address ? <p className="p_item"><b className='b_item'>Address: </b>{db.address}</p> : <p className="p_item"><b className='b_item'>Address: </b>NIL</p> }

               {/*location_coord*/}
               {db.location_coord ? <p className="p_item"><b className='b_item'>Location Coord: </b>{db.location_coord}</p> : <p className="p_item"><b className='b_item'>Location Coord: </b>NIL</p> }

               {/*opip*/}
               {db.opip.length > 0 ? 
                <ul className="ul_item">
                  <b className='b_item'>Opip: </b>
                  {db.opip.map((e, index) => (
                    <MostrarInfo key={index} e={e} indice={index} />
                  ))}
                </ul>
               : <p className="p_item"><b className='b_item'>Opip: </b>NIL</p>}

               {/*imagen*/}

               <section className="section-img">
                {
                  db.img && db.img.map((e,index) => <MostrarImagen key={index} e={e} indice={index} />)
                }                
                
               </section>
          </article>
        </li>
    </div>
  )
}

export default Puertos;