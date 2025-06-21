"use client";
import { useRouter, useParams } from "next/navigation";
import { propostaService } from "../../services/Proposta/proposta";
import { useState } from "react";

export default function DeleteProposta() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    setLoading(true);
    setError("");
    try {
      await propostaService.deleteProposta(Number(params.id));
      router.push("/proposta");
    } catch (err) {
      setError("Erro ao deletar proposta");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h1 className="text-2xl font-bold mb-4 text-red-600">Excluir Proposta</h1>
      <p className="mb-4">Tem certeza que deseja excluir esta proposta? Esta ação não poderá ser desfeita.</p>
      <button onClick={handleDelete} className="btn btn-danger" disabled={loading}>
        {loading ? "Excluindo..." : "Excluir"}
      </button>
      <button onClick={() => router.back()} className="btn ml-4">Cancelar</button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
} 