import { GerenciamentoMeta } from "@/app/types/gerenciamentoMeta";
import { FaTrash } from "react-icons/fa";

interface MetaItens {
    meta: GerenciamentoMeta;
    onChange: (uptated: GerenciamentoMeta)=> void,
    onRemove: ()=> void
}

export const FormMeta: React.FC<MetaItens> = ({ meta, onChange, onRemove }) => {
    return (
        <>
        <div className="block">
            <div className="mg-4">
                <label className="text-black ">Alcancado:</label>
                <input
                className="border-2 border-black text-black"
                type="number"
                value={meta.alcancado}
                onChange={(e)=> onChange({...meta, alcancado: Number(e.target.value)})}
                />
            </div>
            <div>
                <label className="text-black ">Ordem:</label>
                <input
                    className="border-2 border-black text-black"
                    value={meta.ordem}
                    onChange={e => onChange({ ...meta, ordem: Number(e.target.value) })}
                    type="number" />
            </div>
            <button
                type="button"
                onClick={onRemove}
                className="justify-center flex items-center rounded-4xl h-10 w-10 bg-red-600 text-white hover:bg-red-700 transition-colors text-xs font-medium"
            >
                <FaTrash size={14} />
            </button>

        </div>
        </>
    )


}
