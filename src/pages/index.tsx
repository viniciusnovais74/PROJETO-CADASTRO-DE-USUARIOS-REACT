import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Table"
import Cliente from "../core/Cliente"
const clientes = [
  new Cliente('Ana', 23, '1')
]

export default function Home() {
const [cliente, setCliente] = useState<Cliente>(Cliente.nulo())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  function clienteSelecionado(cliente: Cliente) { }
  function clienteExcluido(cliente: Cliente) { }
  function salvarCliente(cliente: Cliente) { setVisivel("tabela") }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className='mb-4' onClick={() => setVisivel('form')}>New Client</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (

          <Formulario cliente={cliente}
            clienteMd={salvarCliente}
            cancelado={() => setVisivel('tabela')} />

        )}

      </Layout>
    </div>
  )
}
