import { useEffect, useState } from "react"
import ColecaoCliente from "../beckend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClenteRepositorio"
import Cliente from "../core/Cliente"
import useTabelaorForm from "./useTabelaouForm"

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const {
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        exibirFormulario
    } = useTabelaorForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.nulo())

    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    function novoCliente() {
        setCliente(Cliente.nulo())
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        exibirTabela,
        tabelaVisivel
    }
}