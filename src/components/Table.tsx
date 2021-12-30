import Cliente from '../core/Cliente'
import { IconEdicao, IconLixo } from './icones';
interface TabelaProps {

    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}


export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function rederizarCabecalho() {
        return (
            <tr>
                <th className='text-left p-4'>ID</th >
                <th className='text-left p-4'>Name</th >
                <th className='text-left p-4'>Age</th>
                {exibirAcoes ? <th className='p-4'>Ações</th> : false}
            </tr>
        )
    }
    console.log(props.clientes);

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (<button onClick={()=>props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}>{IconEdicao}</button>
                ) : false}
                {props.clienteExcluido ? (<button onClick={()=>props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1`}>{IconLixo}</button>
                ) : false}
            </td>
        )
    }

    function rederizarDados() {
        return props.clientes?.map((clientes, i) => {

            return (
                <tr key={clientes.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{clientes.id}</td>
                    <td className='text-left p-4'>{clientes.nome}</td>
                    <td className='text-left p-4'>{clientes.idade}</td>
                    {exibirAcoes ? renderizarAcoes(clientes) : false}
                </tr>
            )

        })
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={` 
            bg-gradient-to-r from-purple-500 to-purple-800
            text-gray-200 
            `}>

                {rederizarCabecalho()}
            </thead>
            <tbody>
                {rederizarDados()}
            </tbody>
        </table>
    )

}