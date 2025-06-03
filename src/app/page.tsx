"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}GerenciamentoProposta/`);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      const result = await response.json();
      setData(result);
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
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}