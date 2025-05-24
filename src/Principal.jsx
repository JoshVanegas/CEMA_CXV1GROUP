import { useState } from 'react'
import './Principal.css'

function Principal() {

  const conteo =  localStorage.getItem('contador')

  const [contador, setCount] = useState(conteo ? parseInt(conteo) : 0)

  return (
    <>
      <div className="card">
        <button onClick={() => {setCount((contador) => {localStorage.setItem('contador', contador + 1); return contador + 1})}} >
          contador es {contador}
        </button>
        <button onClick={() => {setCount(0); localStorage.removeItem('contador')}}>
          Reiniciar
        </button>
      </div>
      <p>Soy muy pro en react</p>
    </>
  )
}

export default Principal
