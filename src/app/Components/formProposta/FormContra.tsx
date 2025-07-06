import React from "react";
import { GerenciamentoContrapartida } from "@/app/types/gerenciamentoContrapartida";
import { FaTrash } from "react-icons/fa";

interface Props {
    contrapartida: GerenciamentoContrapartida;
    onChange: (updated: GerenciamentoContrapartida) => void;
    onRemove: () => void;
}

export const FormContrapartida: React.FC<Props> = ({ contrapartida, onChange, onRemove }) => {
    return (
        <>
        
        
        <div className="block m-2">
            <div className="flex mg-4 justify-between my-2">
                <label className="text-black " htmlFor="#"> Quantidade</label>
                <input
                    className=" border-2 border-black text-black"
                    type="number"
                    placeholder="Quantidade"
                    value={contrapartida.quantidade}
                    onChange={e => onChange({ ...contrapartida, quantidade: Number(e.target.value) })}
                />

            </div>
            <div className="flex mg-4 justify-between my-2">
                <label className="text-black " htmlFor="#">Observação</label>
                <input
                    className=" border-2 border-black text-black"
                    type="text"
                    //placeholder="Observação"
                    value={contrapartida.observacao}
                    onChange={e => onChange({ ...contrapartida, observacao: e.target.value })}
                />
            </div>

            <div className="flex mg-4 justify-between my-2">
                <label className="text-black " htmlFor="#">Contarpartida</label>
                <input
                    className=" border-2 border-black text-black"
                    type="date"
                    value={contrapartida.data}
                    onChange={e => onChange({ ...contrapartida, data: e.target.value })}
                />
            </div>

            <div className="flex mg-4 justify-between my-2">
                <label className="text-black justify-center" htmlFor="#">Staus: </label>
                <select
                    className="flex border-2 border-black text-black"
                    value={contrapartida.status}
                    onChange={e => onChange({ ...contrapartida, status: e.target.value })}
                >
                    <option value="Planejado">Planejado</option>
                    <option value="Realizado">Realizado</option>
                </select>
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
    );
};