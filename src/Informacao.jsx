import { useParams } from 'react-router'

const Informacao = () => {
  const { data } = useParams()
  return (
    <div>
      <h1>Testando rotas no react com parametros</h1>

      {data && 
      <h2> Data Recebida: {data}</h2>
      }
    </div>
  )
}

export default Informacao
