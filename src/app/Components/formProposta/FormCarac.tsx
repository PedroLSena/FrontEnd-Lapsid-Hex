import { GerenciamentoCaracterizacao } from "@/app/types/gerenciamentoCaracterizacao";
import { FaTrash } from "react-icons/fa";

interface CaracItens {
    carac: GerenciamentoCaracterizacao;
    onChange: (uptated: GerenciamentoCaracterizacao)=> void,
    onRemove: ()=> void
}

export const FormCarac: React.FC<CaracItens> = ({ carac, onChange, onRemove }) => {
    return (
        <>
        <div className="block m-2">
            <div className="flex mg-4 justify-between">
                <label className="text-black ">Quantidade:</label>
                <input
                className=" border-2 border-black text-black"
                type="number"
                value={carac.quantidade}
                onChange={(e)=> onChange({...carac, quantidade: Number(e.target.value)})}
                />
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
