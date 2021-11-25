import React, { useState } from 'react'

const FormImc = () => {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  let [clasificacao, setClasificacao] = useState('')
  let [resultado, setResusltado] = useState('')
  const calculaIMC = () => {
    const imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(1)
    if (imc < 18.5) {
      setClasificacao('MAGREZA')
    } else if (imc > 18.5 && imc < 24.9) {
      setClasificacao('NORMAL')
    } else if (imc > 25.0 && imc < 29.9) {
      setClasificacao('SOBREPESO')
    } else if (imc > 30.0 && imc < 39.9) {
      setClasificacao('OBESIDADE')
    } else {
      setClasificacao('OBESIDADE GRAVE')
    }

    setResusltado(imc)
    console.log(imc)
  }
  return (
    <div>
      <h1>Cálculando IMC </h1>
      <label>Altura:</label>
      <input onChange={(e) => setAltura(e.target.value)} />
      <br />
      <label>Peso:</label>
      <input onChange={(e) => setPeso(e.target.value)} />
      <br />
      <button onClick={() => calculaIMC()}>Calcular</button>
      <h1>Resultado: {resultado}</h1>
      <h1>Clasificação : {clasificacao}</h1>
    </div>
  )
}

export default FormImc
