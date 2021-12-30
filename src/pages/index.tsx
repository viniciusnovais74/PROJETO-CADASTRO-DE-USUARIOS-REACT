import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Table"
import Cliente from "../core/Cliente"
const clientes = [
   new Cliente('Ana',23,'1')
 ]
 
export default function Home() {

function clienteSelecionado(cliente: Cliente){}
function clienteExcluido(cliente: Cliente){}

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
        <Botao cor="green" className='mb-4'>New Client</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
