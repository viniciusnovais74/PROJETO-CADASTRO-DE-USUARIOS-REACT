import { useEffect, useState } from "react"
import ColecaoCliente from "../beckend/db/ColecaoCliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Table"
import ClienteRepositorio from "../core/ClenteRepositorio"
import Cliente from "../core/Cliente"


export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.nulo())

  const [clientes, setClientes] = useState<Cliente[]>([])

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(() => {
    repo.obterTodos().then(setClientes)
  }, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function novoCliente() {
    setCliente(Cliente.nulo())
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) { }

 async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

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
              <Botao
                cor="green"
                className='mb-4'
                onClick={novoCliente}
              >Novo Cliente</Botao>
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
