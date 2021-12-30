interface EntradaProps {
    type?: 'text' | 'number'
    texto: string
    value: any
    somenteLeitura?: boolean
    valorMudou?: (value:any)=> void
    className?: string
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className={`mb-4`}>
                {props.texto}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.somenteLeitura}
                onChange={e=> props.valorMudou?.(e.target.value)}
                className={` 
                border border-purple-500 rounded-lg focus:outline-none 
                bg-gray-50 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'} 
                `}
            />
        </div>
    )
}