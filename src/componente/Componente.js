import React from 'react'

export const Componente = () => {
  
  let nombre = "Lucas Vallejos";
  let web = "www.LucasVallejos.com";

  let cursos = [
  
    "JavaScript",
  
    "HTML",
  
    "CSS",
  
    "REACT",
  
    "NODE JS",
  ];
  return (
    <div>
      <h1> Mi primer componente</h1>

      <p> Texto del componente </p>
      <p> Mi nombre es :{nombre} </p>
      <p> Mi web es :{web} </p>

      <h2> Cursos: </h2>
      <ul>
      {
        cursos.map( (curso, indice) => { 
          return ( <li key = {indice} >
            {curso}

          </li>);
        })

      }








      </ul>



    </div>
    
  )
}