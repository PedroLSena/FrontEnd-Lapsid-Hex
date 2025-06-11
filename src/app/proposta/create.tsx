
import { useState } from "react";
import { useRouter } from "next/navigation";
import { propostasServise } from "../services/Proposta/proposta";
import { GerenciamentoProposta } from "../types/gerenciamentoProposta";

export default function CreateProposta() {
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await propostasServise.postProposta(form);
      router.push("/proposta");
    } catch (err) {
      setError("Erro ao criar proposta");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Nova Proposta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Proposta ID</label>
          <input type="number" className="input" value={form.proposta_id} onChange={e => setForm(f => ({...f, proposta_id: Number(e.target.value)}))} required />
        </div>
        <div>
          <label className="block font-medium">Trimestre de Referência</label>
          <input type="date" className="input" value={form.trimestre_de_referencia} onChange={e => setForm(f => ({...f, trimestre_de_referencia: e.target.value}))} required />
        </div>
        <div>
          <label className="block font-medium">Tipo</label>
          <select className="input" value={form.tipo} onChange={e => setForm(f => ({...f, tipo: e.target.value}))}>
            <option value="TRIMESTRAL">TRIMESTRAL</option>
            <option value="OUTRO">OUTRO</option>
          </select>
        </div>
        {/* Aqui você pode adicionar campos para metas, qualitativo, quantitativo e contrapartida, ou criar componentes para cada um */}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Salvando..." : "Criar Proposta"}
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
} 