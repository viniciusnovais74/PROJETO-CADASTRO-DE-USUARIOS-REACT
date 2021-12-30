import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FomrularioProps {
    cliente: Cliente
    cancelado?: ()=>void
    clienteMd?:(cliente:Cliente) => void
}

export default function Formulario(props: FomrularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div className="bg-gray-200 p-5">
            {id ? (
            <Entrada className='mb-4' texto="ID" value={id} />) : false}
            <Entrada className='mb-4' texto='Nome' value={nome} valorMudou={setNome}></Entrada>
            <Entrada texto='Idade' type='number' value={idade} valorMudou={setIdade}></Entrada>
            <div className="mt-3 flex justify-end">
                <Botao cor='blue' className="mr-2" onClick={()=>props.clienteMd?.(new Cliente(nome,+idade,id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}