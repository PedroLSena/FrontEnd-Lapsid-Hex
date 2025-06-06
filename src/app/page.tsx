"use client"
import { useState, useEffect } from "react";
import { metasServise } from "./services/Metas/metas";
import {GerenciamentoMeta} from "../app/types/gerenciamentoMeta"

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState<GerenciamentoMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await metasServise.getAllMetas();
      setData(response);

    } catch (error:any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Gerenciamento de Propostas</h1>
      {data && (
        <pre className=" p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}