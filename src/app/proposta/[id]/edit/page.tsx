"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { propostaService } from "../../../services/Proposta/proposta";
import { GerenciamentoProposta } from "../../../types/gerenciamentoProposta";
import { metasServise } from "@/app/services/Metas/metas";

export default function EditProposta() {
  const router = useRouter();
  const params = useParams();
  const [form, setForm] = useState<GerenciamentoProposta | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await propostaService.getProposta(Number(params.id));
        setForm(Array.isArray(data) ? data[0] : data);
      } catch {
        setError("Erro ao carregar proposta");
      }
    }
    fetchData();
  }, [params.id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
    setLoading(true);
    setError("");
    try {
      await metasServise.putMeta(form.id, form);
      router.push("/proposta");
    } catch (err) {
      setError("Erro ao atualizar proposta");
    } finally {
      setLoading(false);
    }
  }

  if (!form) return <div>Carregando...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Editar Proposta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Proposta ID</label>
          <input type="number" className="input" value={form.proposta_id} onChange={e => setForm(f => f ? {...f, proposta_id: Number(e.target.value)} : f)} required />
        </div>
        <div>
          <label className="block font-medium">Trimestre de Referência</label>
          <input type="date" className="input" value={form.trimestre_de_referencia} onChange={e => setForm(f => f ? {...f, trimestre_de_referencia: e.target.value} : f)} required />
        </div>
        <div>
          <label className="block font-medium">Tipo</label>
          <select className="input" value={form.tipo} onChange={e => setForm(f => f ? {...f, tipo: e.target.value} : f)}>
            <option value="TRIMESTRAL">TRIMESTRAL</option>
            <option value="OUTRO">OUTRO</option>
          </select>
        </div>
        {/* Aqui você pode adicionar campos para metas, qualitativo, quantitativo e contrapartida, ou criar componentes para cada um */}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Alterações"}
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
} 