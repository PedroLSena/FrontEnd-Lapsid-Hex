"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { propostaService } from "../../services/Proposta/proposta";
import { GerenciamentoProposta } from "../../types/gerenciamentoProposta";
import { FormMeta } from "./FormMeta";
import { GerenciamentoMeta } from "@/app/types/gerenciamentoMeta";
import { FaPlus } from "react-icons/fa";

const FormPorposta: React.FC = () => {
    const router = useRouter();
    const [form, setForm] = useState<Omit<GerenciamentoProposta, 'id'>>({
        proposta_id: 0,
        trimestre_de_referencia: '',
        tipo: 'TRIMESTRAL',
        gerenciamento_metas: [],
        gerenciamento_qualitativo: [],
        gerenciamento_quantitativo: [],
        gerenciamento_contrapartida: [],
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [meta, setMeta] = useState<GerenciamentoMeta[]>([]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            let dataForm = {
                ...form,
                proposta_id: Date.now(),
                gerenciamento_metas: meta,
            }
            await propostaService.createProposta(dataForm);
            router.push("/proposta");
        } catch (err) {
            setError("Erro ao criar proposta");
        } finally {
            setLoading(false);
        }
    }

    const newMeta = () => {
        const NovaMeta: GerenciamentoMeta = {
            id: Date.now(),
            alcancado: 0,
            arquivos_ids: [],
            ordem: 0
        }

        setMeta(prev => [...prev, NovaMeta])
    }

    const removeMeta = (index: number) => {
        const novaMeta = meta.filter((_, i) => i != index);
        setMeta(novaMeta);
    }

    const atualizarMeta = (index: number, updated: GerenciamentoMeta) => {
        const novasMetas = [...meta];
        novasMetas[index] = updated;
        setMeta(novasMetas);
    };


    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Nova Proposta</h1>
            <form onClick={handleSubmit}  className="space-y-4">
                <div>
                    {/* <label className="block font-medium text-black">Proposta ID</label>
      <input type="number" className="input" value={form.proposta_id} onChange={e => setForm(f => ({...f, proposta_id: Number(e.target.value)}))} required /> */}
                </div>
                <div>
                    <label className="block font-medium text-black">Trimestre de Referência</label>
                    <input type="date" className="input text-black border-black border-2 rounded p-1" value={form.trimestre_de_referencia} onChange={e => setForm(f => ({ ...f, trimestre_de_referencia: e.target.value }))} required />
                </div>
                <div>
                    <label className="block font-medium text-black">Tipo</label>
                    <select className="input text-black border-black border-2 rounded p-1" value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}>
                        <option value="TRIMESTRAL">TRIMESTRAL</option>
                        <option value="OUTRO">OUTRO</option>
                    </select>
                </div>
                <div>
                    <h1 className="text-black font-bold">Meta</h1>
                    <div className="flex justify-between">
                        {meta.map((meta, index) => (
                            <FormMeta

                                key={meta.id}
                                meta={meta}
                                onChange={(updated) => atualizarMeta(index, updated)}
                                onRemove={() => removeMeta(index)}
                            />
                        ))}
                        <button type="button" onClick={newMeta} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-bold">Caractericacao</h1>
                    <div className="flex justify-end">
                        <button type="button" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-bold">Contrapartida</h1>
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-bold">Proposta</h1>
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-bold">Qualitativo</h1>
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-bold justify-end h-full">Quantitativo</h1>
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <button className="btn btn-primary text-black bg-gray-400 p-2 rounded-2xl" disabled={loading}>
                    {loading ? "Salvando..." : "Criar Proposta"}
                </button>
                {error && <div className="text-red-500">{error}</div>}
            </form>
        </div>
    );
};

export default FormPorposta;