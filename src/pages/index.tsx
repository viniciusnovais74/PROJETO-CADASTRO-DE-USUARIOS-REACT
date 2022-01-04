import { useEffect, useState } from "react"
import ColecaoCliente from "../beckend/db/ColecaoCliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Table"
import ClienteRepositorio from "../core/ClenteRepositorio"
import Cliente from "../core/Cliente"
import useClientes from "../hooks/useClientes"


export default function Home() {

  const {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className='mb-4'
                onClick={novoCliente}
              >Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (

          <Formulario cliente={cliente}
            clienteMd={salvarCliente}
            cancelado={exibirTabela} />

        )}

      </Layout>
    </div>
  )
}
